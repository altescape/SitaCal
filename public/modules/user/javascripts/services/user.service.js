angular.module('user').factory('User', function ($resource) {
  return {
    name: "Michael Watts",
    email: "hello@michaelwatts.me",
    img: "https://avatars1.githubusercontent.com/u/811806?v=3&s=40"
  };
  //return $resource('/users/":id"');
});
