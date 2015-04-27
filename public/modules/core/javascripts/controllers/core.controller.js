'use strict';

angular.module('core').controller('HomeController', ['$scope',
  function($scope) {
    $scope.welcome_msg = "Welcome from HomeController";
    $scope.another_home_msg = "Another home controller message";
  }
]);
