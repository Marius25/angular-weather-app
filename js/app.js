'use strict';

var weatherApp = angular.module('weatherApp', ['ngResource', 'ngRoute'])
	.config(function($routeProvider){
		$routeProvider.when('/presentWeather', {
			templateUrl:'directives/presentWeather.html',
			controller:'presentController'
		});
		
		$routeProvider.when('/fewWeather', {
			templateUrl:'directives/fewWeather.html',
			controller:'fewController'
		});
		
		$routeProvider.otherwise({redirectTo:'/presentWeather'});
		
	});
