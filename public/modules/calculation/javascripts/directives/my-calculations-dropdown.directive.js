'use strict';

angular.module('calculation').directive('myCalculationsDropdown', ['$document', function($document) {
     return {
       restrict: 'E',
       templateUrl: 'modules/calculation/views/partials/calculations-dropdown.partial.html',
       link: function (scope, element, attr) {
          scope.isMyCalculationDropdownVisible = false;

          scope.toggleMyCalculationDropdown = function () {
            scope.isMyCalculationDropdownVisible = !scope.isMyCalculationDropdownVisible;
          };

          $document.bind('click', function (event) {
            var isClickedElementChildOfDropdown = element.find(event.target).length > 0;
            if (isClickedElementChildOfDropdown) { return; }
            scope.isMyCalculationDropdownVisible = false;
            scope.$apply();
          });
       },
       controller: function ($scope, User, Calculations) {
         $scope.user = User;
         $scope.calculations = Calculations;
       } 
     };
   }] 
);
