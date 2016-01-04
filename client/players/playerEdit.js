  angular.module('fussball').directive('playerEdit', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/players/player-edit.html',
      controllerAs: 'player',
      controller: function($scope, $reactive, $stateParams) {
        $reactive(this).attach($scope);
        
        this.savePlayer = function (player) {
          console.log('Saving ' + player + ' to database.');
            Players.update({_id: this.id},
              {$set: {teamName: this.teamName } }
            );
        };

        this.id = $stateParams.teamID;

        this.helpers({
          player: () => {
            return Players.find({ _id: this.id });
          }
        });
      }
    }
  });
