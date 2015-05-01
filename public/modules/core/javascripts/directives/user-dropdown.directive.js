'use strict';

angular.module('core').directive('userDropdown', ['$document', function($document) {
     return {
       restrict: 'E',
       replace: true,
       templateUrl: 'modules/core/views/partials/user-dropdown.partial.html',
       link: function (scope, element, attr) {
          scope.isUserDropdownVisible = false;
          
          scope.toggleUserDropdown = function () {
            scope.isUserDropdownVisible = !scope.isUserDropdownVisible;
          };

          $document.bind('click', function (event) {
            var isClickedElementChildOfDropdown = element.find(event.target).length > 0;
            if (isClickedElementChildOfDropdown) { return; }
            scope.isUserDropdownVisible = false;
            scope.$apply();
          });
       }
     };
   }] 
);
