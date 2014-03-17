'use strict'

/* thebastedo.com services */
var thebastedoServices = angular.module('thebastedoServices', ['ngResource']);

thebastedoServices.factory('HomeUpdates', ['$resource',
	function($resource){
		//return $resource('data/home.updates.json', {}, {
		return $resource('http://api.thebastedo.com/updates', {}, {
			query: {method:'GET', params:{}, isArray:true}
		});
	}]);
