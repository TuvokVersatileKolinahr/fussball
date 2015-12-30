  angular.module('fussball').directive('team', function() {
    return {
      restrict: 'E',
      scope: {
        current: '='
      },
      templateUrl: 'client/teams/team.html',
      controllerAs: 'team',
      controller: function($scope, $reactive) {
        $reactive(this).attach($scope);

        this.helpers({
        });
      }
    }
  });
