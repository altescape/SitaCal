'use strict';

angular.module('calculation').directive('calculationsHeader', function() {
     return {
       replace: true,
       restrict: 'E',
       templateUrl: 'modules/calculation/views/components/calculations-header.view.html',
       controller: function ($scope, User, Calculations) {
         $scope.user = User;
         $scope.calculations = Calculations;
       } 
     };
   } 
);
