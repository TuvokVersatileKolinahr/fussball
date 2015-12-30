  angular.module('fussball').filter('excludeFrom',function(){
    return function(inputArray,filterCriteria){
      return inputArray.filter(function(item){
        // if the value of filterCriteria is "falsy", retain the inputArray as it is
        // then check if the currently checked item in the inputArray is different from the filterCriteria,
        // if so, keep it in the filtered results
        return !filterCriteria || !angular.equals(item,filterCriteria);
      });
    };
  })

  angular.module('fussball').directive('gameNew', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/game/game-new.html',
      controllerAs: 'game',
      controller: function($scope, $reactive, $state) {
        $reactive(this).attach($scope);

        this.teamRed = {
          players: []
        };
        this.teamBlue = {
          players: []
        };

        this.updateTeam = (p1, p2, color) => {
          if (p1 && p2) {
            console.log('updating team ' + color + ' with ', p1, p2);
            if (color === 'red') {
              this.teamRed.players = [p1._id, p2._id];
            } else {
              this.teamBlue.players = [p1._id, p2._id];
            }
          } else {
            if (color === 'red') {
              this.teamRed.players = [];
            } else {
              this.teamBlue.players = [];
            }
          }
        }

        this.newGame = () => {
          if (this.teamRed.players.length == 2 && this.teamBlue.players.length == 2) {

            var tr = Teams.findOne(this.teamRed);
            if (!tr)
              tr = Teams.insert(this.teamRed);
            var tb = Teams.findOne(this.teamBlue);
            if (!tb)
              tb = Teams.insert(this.teamBlue);

            console.log('new game... with ', this.teamRed, this.teamBlue);
            Games.insert({
              teamRed: tr,
              teamBlue: tb,
              startDate: new Date()
            });
            $state.go('game.inprogress');
          }
        }
        
        this.helpers({
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
