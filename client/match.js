  angular.module('fussball').directive('match', function() {
    return {
      restrict: 'E',
      scope: {
        current: '='
      },
      templateUrl: 'client/match.html',
      controllerAs: 'match',
      controller: function($scope, $reactive) {
        $reactive(this).attach($scope);

        this.helpers({
        });
      }
    }
  });
