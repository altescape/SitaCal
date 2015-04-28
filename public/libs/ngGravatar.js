angular.module('ngGravatar', []);
angular.module('ngGravatar').directive('gravatar', function (Gravatar) {
  return {
    replace: true,
    restrict: 'E',
    template: '<img ng-src="{{ gravatarUrl() }}">',
    scope: {email: '='},
    link: function (scope) {
      scope.gravatarUrl = function () {
        return Gravatar(scope.email);
      };
    }  
  };
});

angular.module('ngGravatar').provider('Gravatar', function () {
  var imgSize = 35;
  var url = "//www.gravatar.com/avatar/";

  this.setImgSize = function (size) {
    imgSize = size;
  };

  this.$get = function () {
    return function (email) {
      return url +  CryptoJS.MD5(email) + "?size=" + imgSize.toString();
    };
  };
});
