  angular.module('fussball').directive('game', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/game/game.html',
      controllerAs: 'game',
      controller: function($scope, $reactive, $state) {
        $reactive(this).attach($scope);

        this.helpers({
          finished: () => {
            return Games.find({
              endDate: { $exists: true }
            });
          }
        });
      }
    }
  });
