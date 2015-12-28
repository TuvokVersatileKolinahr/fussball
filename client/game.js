  angular.module('fussball').directive('game', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/game.html',
      controllerAs: 'game',
      controller: function($scope, $reactive) {
        $reactive(this).attach($scope);

        this.newGame = () => {

          console.log('new game... with ' + this.playerOne.name + ' and ' + this.playerTwo.name + '.');
          Games.insert({
            playerOne: this.playerOne._id,
            playerTwo: this.playerTwo._id,
            startDate: new Date()
          });
          return 'New game';
        }
        
        this.helpers({
          players: () => {
            return Players.find({});
          }
        });
      }
    }
  });
