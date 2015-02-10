'use strict'
/************************************************************************************************************************************/
/** This is the service which calls the back end web api and handles all the backend interactions for the page **********************/

angularStartServices.factory('homeService', ['$q', '$resource', '$http', function ($q, $resource, $http) {

    var BaseUrl = "/api/values/";
    var homeService = {};
    var homeService = $resource(BaseUrl, {

    }, {
        query: {
            method: 'GET',
            isArray: false,
            transformResponse: function (data) { return { list: angular.fromJson(data) } }
        }
    });
    // get the data from the web api 
    homeService.gettodo = function () {

        var deferred = $q.defer();


        homeService.query({}, {}, function (data) {

            deferred.resolve(data.list);


        }, function (error) {
            deferred.reject("no data found");
        });


        return deferred.promise;
    };

    // send the data to save todos to web api 
    homeService.SaveTodo = function (form) {

        var deferred = $q.defer();


        homeService.save({}, JSON.stringify(form), function (data) {

            deferred.resolve(data[0]);


        }, function (error) {
            deferred.reject("no data found");
        });
        return deferred.promise;
    };
        return homeService;
   

}]);