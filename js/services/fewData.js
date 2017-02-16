'use strict';

weatherApp.factory('fewData', function($resource, $q) {

    var resource = $resource('http://api.openweathermap.org/data/2.5/forecast/daily?q=:city&mode=json&units=metric&cnt=3&cnt=7&id=524901&APPID=XXXXXXXXXXXXXXXX', { city: '@city' });
    return {
        getWeatherData: function(city) {
            var deferred = $q.defer();

            resource.get({ city: city },
                function(data) {
                    deferred.resolve(data);
                },
                function(response) {
                    deferred.reject(response);
                });

            return deferred.promise;
        }

    };

});
