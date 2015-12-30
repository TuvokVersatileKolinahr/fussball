  angular.module('fussball').directive('gameInprogress', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/game/game-inprogress.html',
      controllerAs: 'game',
      controller: function($scope, $reactive, $state) {
        $reactive(this).attach($scope);

        this.currentGame;
        
        this.helpers({
          current: () => {
            this.currentGame = Games.findOne({
              endDate: { $exists: false }
            });
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
