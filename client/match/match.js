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
