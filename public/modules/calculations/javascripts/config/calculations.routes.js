'use strict';

// Setting up route
angular.module('calculations').config(['$routeProvider',
    function($routeProvider) {
      // Home state routing
      $routeProvider.
        when('/my-calculations', {
          controller: 'CalculationsController',
          templateUrl: 'modules/calculations/views/calculations.view.html'
        });
    }
]);
