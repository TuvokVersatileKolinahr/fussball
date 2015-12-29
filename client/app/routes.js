  angular.module('fussball').config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/players");

      $stateProvider
        .state('players', {
          url: "/players",
          // template: UiRouter.template('home.html')
          template: "<leader-board></leader-board>"
        })
          .state('players.new', {
            url: "/new",
            // template: UiRouter.template('newplayer.html')
            template: "<player-form></player-form>"
          })
        .state('game', {
          url: "/game",
          // template: UiRouter.template('newplayer.html')
          template: "<game></game>"
        })
          .state('game.new', {
            url: "/new",
            // template: UiRouter.template('newplayer.html')
            template: "<game-new></game-new>"
          })
          .state('game.inprogress', {
            url: "/inprogress",
            // template: UiRouter.template('newplayer.html')
            template: "<game-inprogress></game-inprogress>"
          });
    }
  ]);
