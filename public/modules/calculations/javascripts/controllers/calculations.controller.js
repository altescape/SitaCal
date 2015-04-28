'use strict';

angular.module('calculations').controller('CalculationsController', ['$scope', 'Calculations',
  function($scope, Calculations) {
    $scope.calculations = Calculations;
  }
]);
