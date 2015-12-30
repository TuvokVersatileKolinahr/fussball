  angular.module('fussball').directive('teamEdit', function() {
    return {
      restrict: 'E',
      scope: {
        current: '='
      },
      templateUrl: 'client/teams/team-edit.html',
      controllerAs: 'team',
      controller: function($scope, $reactive, $state, $stateParams) {
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
        this.update = () => {
          if (this.teamName) {
            Teams.update({_id: this.id},
              {$set: {teamName: this.teamName } }
            );
          } else {
            Teams.update({_id: this.id},
              {$unset: {teamName: "" } }
            );
          }
          // Refresh this state to get all data in the right places
          $state.go($state.current, $stateParams, {reload: true});
        }

        this.helpers({
        });
      }
    }
  });
