'use strict';

angular.module('core').directive('coreNav', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'modules/core/views/partials/nav.partial.html',
    controller: function ($window, $scope, User) {
      $scope.user = User;
    }
  };
} 
);
