'use strict';

// Setting up route
angular.module('core').config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    // Home state routing
    $routeProvider.
      when('/home', {
        controller: 'HomeController',
        templateUrl: 'modules/core/views/home.view.html'
      });

    $locationProvider.html5Mode(true);
  }
]);
