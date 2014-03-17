'use strict';

/* thebastedo.com app module */

var thebastedoApp = angular.module('thebastedoApp', [
	'ngRoute',
	'ngSanitize',
	'thebastedoControllers',
	'thebastedoServices'
]);

thebastedoApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/home',{
				templateUrl: 'views/home.html',
				controller: 'HomeCtrl'
			}).
			when('/work',{
				templateUrl: 'views/work.html',
				controller: 'WorkCtrl'
			}).
			when('/work/starfield',{
				templateUrl: 'views/work.starfield.html',
				controller: 'WorkStarfieldCtrl'
			}).
			when('/about',{
				templateUrl: 'views/about.html',
				controller: 'AboutCtrl'
			}).
			otherwise({
				redirectTo: '/home'
			});
		}]);
