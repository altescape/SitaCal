'use strict';

angular.module('core').directive('sitaPageNav', function() {
     return {
       replace: true,
       restrict: 'E',
       templateUrl: 'modules/core/views/components/nav.view.html',
       controller: function ($window, $scope, User) {
         $scope.user = User;

         $scope.toggleUserMenu = function () {
           $scope.userMenuOpen = !$scope.userMenuOpen;
         };

         $window.onclick = function () {
           if ($scope.userMenuOpen) {
             $scope.userMenuOpen = false; 
             $scope.$apply();
           }
         };

       } 
     };
   } 
);
