'use strict';

angular.module('core').directive('sitaPageNav', function() {
     return {
       replace: true,
       restrict: 'E',
       templateUrl: 'modules/core/views/nav.view.html',
       controller: function ($scope, User) {
         $scope.user = User;
       } 
     };
   } 
);
