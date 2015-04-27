'use strict';

// Setting up route
angular.module('user').config(['$routeProvider',
    function($routeProvider) {
      // Home state routing
      $routeProvider.
        when('/user', {
          controller: 'UserController',
          templateUrl: 'modules/user/views/user.view.html'
        });
    }
]);
