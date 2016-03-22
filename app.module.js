angular
  .module('sharktastic', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: "templates/home.html",
        controller: 'HomeController'
      })
      .when('/create', {
        templateUrl: "templates/create.html",
        controller: "CreateController"
      })
      .when('/posts', {
        templateUrl: "templates/posts.html",
        controller: "PostController"
      })
  })
