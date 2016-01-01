  angular.module('fussball').config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/players");

      $stateProvider
        // PLAYERS
        .state('players', {
          url: "/players",
          template: "<leader-board></leader-board>"
        })
          .state('players.new', {
            url: "/new",
            template: "<player-form></player-form>"
          })
        // GAMES
        .state('game', {
          url: "/game",
          template: "<game></game>"
        })
          .state('game.new', {
            url: "/new",
            template: "<game-new></game-new>"
          })
          .state('game.inprogress', {
            url: "/inprogress",
            template: "<game-inprogress></game-inprogress>"
          })
          .state('game.list', {
            url: "/list",
            template: "<game-list></game-list>"
          })
        // TEAMS
        .state('team', {
          url: '/team',
          template: "<team></team>"
          })
          .state('team.list', {
            url: "/list",
            template: "<team-list></team-list>"
          })
          .state('team.detail', {
            url: "/detail/:teamID",
            template: "<team-detail></team-detail>"
          })
          .state('team.edit', {
            url: "/edit/:teamID",
            template: "<team-edit></team-edit>"
          });
    }
  ]);
