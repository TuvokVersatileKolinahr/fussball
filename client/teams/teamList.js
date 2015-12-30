  angular.module('fussball').directive('teamList', function() {
    return {
      restrict: 'E',
      scope: {
        current: '='
      },
      templateUrl: 'client/teams/team-list.html',
      controllerAs: 'team',
      controller: function($scope, $reactive) {
        $reactive(this).attach($scope);

        this.helpers({
          all: () => {
            return Teams.find({});
          }
        });
      }
    }
  });
