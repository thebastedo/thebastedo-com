'use strict';

/* thebastedo.com controllers */

var thebastedoControllers = angular.module('thebastedoControllers', []);

thebastedoControllers.controller('HomeCtrl', ['$scope', 'HomeUpdates',
	function($scope, HomeUpdates) {
		$scope.message = 'WELCOME TO THE BASTEDO.COM';
		$scope.updates = HomeUpdates.query();
	}]);

thebastedoControllers.controller('WorkCtrl', ['$scope',
	function($scope) {
		$scope.message = 'WORK SAMPLES';
	}]);

thebastedoControllers.controller('WorkStarfieldCtrl', ['$scope',
	function($scope) {
		$scope.message = 'github: <a href="https://github.com/thebastedo/Starfield">https://github.com/thebastedo/Starfield</a>';
	}]); 

thebastedoControllers.controller('AboutCtrl', ['$scope',
	function ($scope) {
		$scope.message = 'So this will be where I talk about myself when I decide what to say exactly.';
	}]);
