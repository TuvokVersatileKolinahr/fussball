  angular.module('fussball').config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/");

      $stateProvider
        .state('home', {
          url: "/",
          // template: UiRouter.template('home.html')
          template: "<leader-board></leader-board>"
        })
        .state('newplayer', {
          url: "/newplayer",
          // template: UiRouter.template('newplayer.html')
          template: "<player-form></player-form>"
        });
    }
  ]);
