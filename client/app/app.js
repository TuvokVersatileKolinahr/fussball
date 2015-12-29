/* global Meteor, Template, Session, Mongo, Players, AmplifiedSession, angular */

if (Meteor.isClient) {
  // This code only runs on the client
  angular.module('fussball',['angular-meteor', 'ui.router', 'accounts.ui']);

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
  
  angular.module('fussball').controller('MainController', ['$scope', function ($scope) {
    $scope.test = "The fußball app";
  }]);

  angular.module('fussball').filter('ISODate', function() {
  return function(input) {
    return moment(input).format('MMMM Do YYYY, h:mm:ss a');
  };
});
}
