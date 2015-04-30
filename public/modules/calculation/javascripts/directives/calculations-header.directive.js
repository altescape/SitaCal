'use strict';

angular.module('calculation').directive('calculationsHeader', function() {
     return {
       replace: true,
       restrict: 'E',
       templateUrl: 'modules/calculation/views/partials/calculations-header.partial.html'
     };
   } 
);
