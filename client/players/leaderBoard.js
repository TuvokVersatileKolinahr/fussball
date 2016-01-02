  angular.module('fussball').directive('leaderBoard', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/players/leader-board.html',
      controllerAs: 'leaderBoard',
      controller: function($scope, $reactive) {
        $reactive(this).attach($scope);
 
        this.helpers({
          players: () => {
            return Players.find({}, { sort: { elo: -1 } });
          }
        });
      }
    }
  });
