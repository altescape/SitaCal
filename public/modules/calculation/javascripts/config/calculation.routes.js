'use strict';

// Setting up route
angular.module('calculation').config(['$routeProvider',
    function($routeProvider) {
      // Home state routing
      $routeProvider.
        when('/calculations', {
          controller: 'CalculationController',
          templateUrl: 'modules/calculation/views/list-calculations.view.html'
        }).
        when('/calculations/create', {
          controller: 'CalculationController',
          templateUrl: 'modules/calculation/views/create-calculation.view.html'
        }).
        when('/calculations/:calculationId', {
          controller: 'CalculationController',
          templateUrl: 'modules/calculation/views/view-calculation.view.html'
        }).
        when('/calculations/:calculationId/edit', {
          controller: 'CalculationController',
          templateUrl: 'modules/calculation/views/edit-calculation.view.html'
        })
      ;
    }
]);
