'use strict';

angular.module('user').controller('UserController', ['$scope',
  function($scope) {
    $scope.user = {
      name: "Michael Watts",
      img: "https://avatars1.githubusercontent.com/u/811806?v=3&s=40"
    };
  }
]);
