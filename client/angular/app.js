var app = angular.module('app', ['ngRoute', 'ngMessages'])
.config(function ($routeProvider) {
$routeProvider
	 .when('/',{
		templateUrl: 'angular/partials/login.html'
	 })
	.when('/logged_in',{
		templateUrl: 'angular/partials/welcome.html'
	})
	.when('/todo',{
		templateUrl: 'angular/partials/todo.html'
	})
	.when('/update/:id',{
		templateUrl: 'angular/partials/update.html'
	})
	.otherwise({
		templateUrl: 'angular/partials/login.html'
	})
});