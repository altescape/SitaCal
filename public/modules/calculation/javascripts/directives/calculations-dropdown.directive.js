'use strict';

angular.module('calculation').directive('myCalculationsDropdown', function() {
     return {
       replace: true,
       restrict: 'E',
       templateUrl: 'modules/calculation/views/components/calculations-dropdown.view.html',
       controller: function ($window ,$scope, User, Calculations) {
         $scope.user = User;
         $scope.calculations = Calculations;

         $scope.toggleCalculationsDropdown = function () {
           $scope.calculationsDropdownOpen = !$scope.calculationsDropdownOpen;
         };

         $window.onclick = function () {
           if ($scope.calculationsDropdownOpen) {
             $scope.calculationsDropdownOpen = false; 
             $scope.$apply();
           }
         };

       } 
     };
   } 
);
