/* global Meteor, Template, Session, Mongo, Players, AmplifiedSession, angular */

if (Meteor.isClient) {
  // This code only runs on the client
  angular.module('fussball',['angular-meteor', 'ui.router']);

  angular.module('fussball').controller('MainController', ['$scope', function ($scope) {
    $scope.test = "The fußball app";
    // $scope.addPlayer = 
  }]);
}
