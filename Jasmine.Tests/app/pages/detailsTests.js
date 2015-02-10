'use strict';

describe('SampleControllerTest', function () {
    var $scope, $rootScope, $httpBackend, $timeout, $window, $location, $filter, $routeParams, $location, $toastr, createController, _;

 
   
    beforeEach(module('main.controller'));   
    beforeEach(module('mock.services'));
    beforeEach(module('ngResource'));
    beforeEach(module('angularStart.services'));
    
    beforeEach(inject(function ($injector, $q, SampleServiceMock) {
        $window = $injector.get('$window');
        $location = $injector.get('$location');
        $timeout = $injector.get('$timeout');
        $httpBackend = $injector.get('$httpBackend');
        $filter = $injector.get('$filter');
        var $controller = $injector.get('$controller');

        $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();


        createController = function () {
            return $controller('homeController', {
                '$scope': $scope,
                'homeService': SampleServiceMock,
                '$location': $location,
            });
        };
    }));

    afterEach(function () {
        $rootScope.$apply();
    });

    it('should get the todos data correct', function () {

        var controller = createController();
        $scope.getToDO();
        $rootScope.$apply();
       
        expect($scope.todos[0].done).toBe(false);
    });
    it('should check the date of the deadline', function () {

        var controller = createController();
       var dateValue = $scope.caluclateDate('2015-02-09');

       expect(dateValue).toBe(false);
    });
    it('should add a todo into list', function () {

        var controller = createController();
        $scope.getToDO();
        $rootScope.$apply();
        $scope.todoText = "sample data";
        $scope.deadLine = "2015-02-09";
        $scope.addTodo();
       
        expect($scope.todos.length).toBe(4);
    });
    it('should not add a todo without adding a todo task and deadline', function () {

        var controller = createController();
        $scope.getToDO();
        $rootScope.$apply();
        $scope.addTodo();
        expect($scope.todos.length).toBe(3);
    });
});