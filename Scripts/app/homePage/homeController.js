'use strict'
appRoot.controller('homeController', ['$scope', 'homeService', '$location', function ($scope, homeService, $location) {
    $scope.form = [];
    $scope.msg = "";

    $scope.todos = [];
    $scope.markAll = false;
    /****************************************************/
    /******* call web api to get todos list ********/
    $scope.getToDO = function () {
        homeService.gettodo().then(function (data) {
                       $scope.todos = data;
        });
    };
   

    if (typeof (Storage) !== "undefined") {
        $scope.todos = JSON.parse(localStorage.getItem("todos"));
      }
   

    $scope.addTodo = function () {
        if ($scope.todoText && $scope.deadLine) {
            $scope.todos.push({ text: $scope.todoText, done: false,deadline :$scope.deadLine });
            $scope.todoText = '';
            $scope.deadLine = '';
            console.log($scope.todos);
        }
    };


    $scope.save = function () {
        homeService.SaveTodo($scope.todos).then(function (data) {
            if (typeof (Storage) !== "undefined") {
                localStorage.setItem("todos", JSON.stringify($scope.todos));
                alert('todos saved in local storage refresh the page you will still see the todo list');


            }
            
        });
    }

    $scope.caluclateDate = function (deadLine)
    {
        console.log(deadLine);
        var date = new Date();         
        var dd = JSON.stringify(deadLine);
        var mydate = new Date(dd); 

        if (date > mydate) {           
            return false;
        }
        else {            
            return true;
        }
    }
    $scope.isTodo = function () {
        return $scope.todos.length > 0;
    }
    $scope.toggleEditMode = function () {
        $(event.target).closest('li').toggleClass('editing');
    };
    $scope.editOnEnter = function (todo) {
        if (event.keyCode == 13 && todo.text) {
            $scope.toggleEditMode();
        }
    };

    $scope.remaining = function () {
        var count = 0;
        angular.forEach($scope.todos, function (todo) {
            count += todo.done ? 0 : 1;
        });
        return count;
    };

    $scope.hasDone = function () {
        return ($scope.todos.length != $scope.remaining());
    }

    $scope.itemText = function () {
        return ($scope.todos.length - $scope.remaining() > 1) ? "items" : "item";
    };

    $scope.toggleMarkAll = function () {
        angular.forEach($scope.todos, function (todo) {
            todo.done = $scope.markAll;
        });
    };

    $scope.clear = function () {
        var oldTodos = $scope.todos;
        $scope.todos = [];
        angular.forEach(oldTodos, function (todo) {
            if (!todo.done) $scope.todos.push(todo);
        });
    };
}]);