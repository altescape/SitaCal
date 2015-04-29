'use strict';

angular.module('calculation').directive('myCalculationsDropdown', function() {
     return {
       replace: true,
       restrict: 'E',
       templateUrl: 'modules/calculation/views/components/calculations-dropdown.view.html',
       controller: function ($scope, User, Calculations) {
         $scope.user = User;
         $scope.calculations = Calculations;
       } 
     };
   } 
);
