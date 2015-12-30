  angular.module('fussball').directive('teamDetail', function() {
    return {
      restrict: 'E',
      scope: {
        current: '='
      },
      templateUrl: 'client/teams/team-detail.html',
      controllerAs: 'team',
      controller: function($scope, $reactive, $stateParams) {
        $reactive(this).attach($scope);

        if ($scope.current) {
          this.id = $scope.current;
        } else {
          this.id = $stateParams.teamID;
        }
        if (this.id) {
          var aTeam = Teams.findOne({ _id: this.id });
          this.playerOne = Players.findOne({ _id: aTeam.players[0] });
          this.playerTwo = Players.findOne({ _id: aTeam.players[1] });
          this.teamName = aTeam.teamName;
        }

        this.helpers({
        });
      }
    }
  });
