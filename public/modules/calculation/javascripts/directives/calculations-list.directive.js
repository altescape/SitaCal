'use strict';

angular.module('calculation').directive('calculationsList', function() {
     return {
       replace: true,
       restrict: 'E',
       templateUrl: 'modules/calculation/views/partials/calculations-list.partial.html'
     };
   } 
);
