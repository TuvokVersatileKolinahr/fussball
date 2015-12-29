  angular.module('fussball').directive('gameInprogress', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/game-inprogress.html',
      controllerAs: 'game',
      controller: function($scope, $reactive, $state) {
        $reactive(this).attach($scope);

        this.currentGame;

        this.finish = () => {
          console.log(this.currentGame);
          // this.currentGame.endDate = new Date();
          Games.update({_id: this.currentGame._id},
            {$set: {endDate: new Date()} }
          );
          $state.go('game.new');
        }
        
        this.helpers({
          current: () => {
            this.currentGame = Games.findOne({
              endDate: { $exists: false }
            });            //TODO: lookup player names
            console.log(this.currentGame);
            return this.currentGame;
          },
          games: () => {
            return Games.find({});
          },
          teams: () => {
            return Teams.find({});
          },
          players: () => {
            return Players.find({});
          }
        });
      }
    }
  });
