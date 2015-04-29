'use strict';

angular.module('calculation').controller('CalculationController', ['$scope', 'Calculation', 'Calculations',
  function($scope, Calculation, Calculations) {
    $scope.calculation = Calculation;
    $scope.calculations = Calculations;
  }
]);
