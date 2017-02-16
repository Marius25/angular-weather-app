'use strict';

weatherApp.controller('fewController',

    function fewController($scope, fewData, $routeParams) {

        $scope.searchWeatherByCity = function(city) {
            fewData.getWeatherData(city).then(function(res) {
                $scope.cod = res.cod;
                $scope.weatherData = res.list;
            });
        };

    });
