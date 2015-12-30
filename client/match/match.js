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

        this.finish = (win_id) => {
          Games.update({_id: $scope.current._id},
            {
              $set: {
                endDate: new Date(),
                winner: win_id,
              }
            }
          );
          $state.go('game.new');
        }

        this.helpers({
        });
      }
    }
  });
