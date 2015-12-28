  angular.module('fussball').directive('playerForm', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/player-form.html',
      controllerAs: 'playerForm',
      controller: function($scope, $reactive) {
        $reactive(this).attach($scope);
        this.addPlayer = function (newPlayer) {
          Players.insert({
            name: newPlayer,
            elo: 100,
            joinDate: new Date()
          });
        };

        this.helpers({
        });
      }
    }
  });
