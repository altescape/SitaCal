'use strict';

angular.module('user').controller('UserController', ['$scope', 'User',
  function($scope, User) {
    $scope.user = User;
  }
]);
