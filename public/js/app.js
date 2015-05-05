'use strict';

// App creation and dependicies
var app = window.angular.module('CardChooserApp',['ui.router']);

//App config routes
app.config(
  ['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      // For unmatched and default routes
      $urlRouterProvider.otherwise('/landing');
      $urlRouterProvider.when('/', '/landing');

      // Application routes
      $stateProvider
        .state('landing', {
          url: '/landing',
          templateUrl: '/views/landing.html'
        });
    }
  ]
);