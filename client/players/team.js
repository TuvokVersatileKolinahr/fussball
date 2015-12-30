  angular.module('fussball').directive('team', function() {
    return {
      restrict: 'E',
      scope: {
        current: '='
      },
      templateUrl: 'client/players/team.html',
      controllerAs: 'team',
      controller: function($scope, $reactive) {
        $reactive(this).attach($scope);

        if ($scope.current) {
          var aTeam = Teams.findOne({ _id: $scope.current });
          console.log(aTeam);
          this.playerOne = Players.findOne({ _id: aTeam.players[0] });
          this.playerTwo = Players.findOne({ _id: aTeam.players[1] });
        }

        this.helpers({
        });
      }
    }
  });
