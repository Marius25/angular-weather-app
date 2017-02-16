'use strict';

weatherApp.controller('presentController',

    function presentController($scope, presentData, $routeParams) {

        $scope.searchPresentWeatherByCity = function(city) {
            presentData.getPresentWeatherData(city).then(function(res) {
                $scope.weatherData = res;
                $scope.weatherDate = res.dt * 1000; //receiving unix timestamp in seconds, convert to miliseconds
            });
        };

    });
