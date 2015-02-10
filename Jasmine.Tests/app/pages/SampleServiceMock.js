// Mocked Service
angular.module('mock.services', []).
factory('SampleServiceMock', function ($q) {

    var SampleServiceMock = {};
    var mockData = [{ "text": "get groceries", "done": false, "deadline": "2015-00-09" }, { "text": "buy a car", "done": false, "deadline": "2015-00-09" }, { "text": "browse reddit ", "done": false, "deadline": "2015-00-09" }];
   

    SampleServiceMock.gettodo = function () {
        return $q.when(mockData);
    };

    // other stubbed methods

    return SampleServiceMock;
});