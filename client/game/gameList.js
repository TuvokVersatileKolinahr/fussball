  angular.module('fussball').directive('gameList', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/game/game-list.html',
      controllerAs: 'game',
      controller: function($scope, $reactive, $state) {
        $reactive(this).attach($scope);

        this.helpers({
          finished: () => {
            return Games.find({
              endDate: { $exists: true }
            }, {sort: {endDate: -1}});
          }
        });

      }
    }
  });
