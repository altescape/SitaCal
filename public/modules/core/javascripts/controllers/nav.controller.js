'use strict';

angular.module('core').controller('NavController', ['$scope', 'User',
  function($scope, User) {
    $scope.user = User;
  }
]);
