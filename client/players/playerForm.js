  angular.module('fussball').directive('playerForm', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/players/player-form.html',
      controllerAs: 'playerForm',
      controller: function($scope, $reactive) {
        $reactive(this).attach($scope);
        
        this.addPlayer = function (newPlayer) {
          console.log('Adding ' + newPlayer + ' to database.');
          Players.insert({
            name: newPlayer,
            elo: 1500,
            joinDate: new Date()
          });
        };

        this.helpers({
        });
      }
    }
  });
