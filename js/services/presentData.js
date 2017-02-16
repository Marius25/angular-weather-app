'use strict';

weatherApp.factory('presentData', function($resource, $q) {
    //Need new API key
    var resource = $resource('http://api.openweathermap.org/data/2.5/weather?q=:city&units=metric&cnt=7&id=524901&APPID=XXXXXXXXXXXXXXXX', { city: '@city' });
    return {
        getPresentWeatherData: function(city) {
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
