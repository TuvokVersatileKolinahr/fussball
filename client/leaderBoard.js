  angular.module('fussball').directive('leaderBoard', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/leader-board.html',
      controllerAs: 'leaderBoard',
      controller: function($scope, $reactive) {
        $reactive(this).attach($scope);
 
        this.helpers({
          players: () => {
            return Players.find({});
          }
        });
      }
    }
  });
