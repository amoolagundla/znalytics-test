/// <reference path="homePage/homeController.js" />
/// <reference path="homePage/home.html" />
/// <reference path="homePage/home.html" />
/// <reference path="homePage/home.html" />
/// <reference path="homePage/home.html" />
var appRoots = angular.module('main', [
'ngRoute',
    'ngGrid',
    'ngResource',  
     'main.controller',
'angularStart.services',
'ui.bootstrap']);

var appRoot = angular.module('main.controller', []);
var angularStartServices = angular.module('angularStart.services', ['ngResource']);


appRoots.config(['$routeProvider',
function ($routeProvider) {
  
    //Setup routes to load partial templates from server. TemplateUrl is the location for the server view (Razor .cshtml view)
    $routeProvider
        .when('/home', {
            templateUrl: '/Scripts/app/homePage/home.html',
            controller: 'homeController'
        }).otherwise({
            redirectTo: '/home'
        });
}
]).controller('RootController', [
        function () {
        }
]);