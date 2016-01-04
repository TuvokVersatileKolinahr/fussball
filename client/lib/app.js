/* global Meteor, Template, Session, Mongo, Players, AmplifiedSession, angular */

/*
 * Files in the lib directory at the root of your application are loaded
 * first. Files that match main.* are loaded after everything else.
 *
 * Files in subdirectories are loaded before files in parent directories,
 * so that files in the deepest subdirectory are loaded first (after lib),
 * and files in the root directory are loaded last (other than main.*).
 *
 * Within a directory, files are loaded in alphabetical order by filename.
 *
 * These rules stack, so that within lib, for example, files are still loaded
 * in alphabetical order; and if there are multiple files named main.js, the
 * ones in subdirectories are loaded earlier.
 */

let modulesToLoad = [
  'angular-meteor',
  'ui.router',
  'ui.bootstrap',
  'accounts.ui'
];

angular.module('fussball', modulesToLoad);

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

angular.module('fussball').controller('MainController', ['$scope', function ($scope) {
  $scope.test = "The fußball app";
}]);

angular.module('fussball').filter('ISODate', () => {
  return (input) => {
    return moment(input).format('MMMM Do YYYY, h:mm:ss a');
  };
});
