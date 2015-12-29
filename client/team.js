  angular.module('fussball').directive('team', function() {
    return {
      restrict: 'E',
      scope: {
        current: '='
      },
      templateUrl: 'client/team.html',
      controllerAs: 'team',
      controller: function($scope, $reactive, $state) {
        $reactive(this).attach($scope);

        console.log($scope.current);

        this.helpers({
        });
      }
    }
  });
