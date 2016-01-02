  angular.module('fussball').directive('match', function() {
    return {
      restrict: 'E',
      scope: {
        current: '='
      },
      templateUrl: 'client/match/match.html',
      controllerAs: 'match',
      controller: function($scope, $reactive, $state) {
        $reactive(this).attach($scope);

        if ($scope.current) {
          this.winners = Teams.findOne({
            _id: $scope.current.winner
          });
        }

        this.scoreRed = 0;
        this.scoreBlue = 0;

        this.addGoal = (goal_id) => {
          if (goal_id == $scope.current.teamRed)
            this.scoreRed++;
          if (goal_id == $scope.current.teamBlue)
            this.scoreBlue++;
          if (this.scoreRed == 7)
            this.finish($scope.current.teamRed)
          if (this.scoreBlue == 7)
            this.finish($scope.current.teamBlue)
        }

        /**
         * This method will calculate the change in a player's
         * Elo rating after playing a single game against another player.
         * The value K is the maximum change in rating. 
         **/
        calculateELORatingChange = (elo1, elo2, k) =>
        {
          var percentage = 1 / ( 1 + Math.pow( 10, (elo2 - elo1) / 400 ) );

          return {
            win: Math.round( k * ( 1 - percentage ) ),
            draw: Math.round( k * ( .5 - percentage ) ),
            loss: Math.round( k * ( 0 - percentage ) ),
            percent:  Math.round( percentage * 100 )
          };
        }

        this.finish = (win_id) => {
          Games.update({_id: $scope.current._id},
            {
              $set: {
                endDate: new Date(),
                winner: win_id,
              }
            }
          );

          let red = Teams.findOne({ _id: $scope.current.teamRed });
          let blue = Teams.findOne({ _id: $scope.current.teamBlue });

          let redp1 = Players.findOne({ _id: red.players[0] });
          let redp2 = Players.findOne({ _id: red.players[1] });
          let bluep1 = Players.findOne({ _id: blue.players[0] });
          let bluep2 = Players.findOne({ _id: blue.players[1] });

          redelo = redp1.elo + redp2.elo;
          blueelo = bluep1.elo + bluep2.elo;

          var elochanged = calculateELORatingChange(redelo, blueelo, 150);
          console.log(elochanged);

          if (red._id == win_id) {
            console.log('red won');
            Players.update({_id: redp1._id},
              {
                $set: {elo: redp1.elo + elochanged.win}
              }
            )
            Players.update({_id: redp2._id},
              {
                $set: {elo: redp2.elo + elochanged.win}
              }
            )
          } else {
            console.log('red lost');
            Players.update({_id: redp1._id},
              {
                $set: {elo: redp1.elo + elochanged.loss}
              }
            )
            Players.update({_id: redp2._id},
              {
                $set: {elo: redp2.elo + elochanged.loss}
              }
            )
          }

          if (blue._id == win_id) {
            console.log('blue won');
            Players.update({_id: bluep1._id},
              {
                $set: {elo: bluep1.elo + elochanged.win}
              }
            )
            Players.update({_id: bluep2._id},
              {
                $set: {elo: bluep2.elo + elochanged.win}
              }
            )
          } else {
            console.log('blue lost');
            Players.update({_id: bluep1._id},
              {
                $set: {elo: bluep1.elo + elochanged.loss}
              }
            )
            Players.update({_id: bluep2._id},
              {
                $set: {elo: bluep2.elo + elochanged.loss}
              }
            )
          }

          $state.go('game.new');
        }

        this.helpers({
        });
      }
    }
  });
