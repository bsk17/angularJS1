// it is necessary to mention the $scope as it is the communicator betwen the index.html and controller.js
app.controller('MainController', ['$scope', function ($scope) {
        $scope.list = ["Get SQL installed", "Look into AngularJS", "Review some code!!!"];

        $scope.addItem = function () {
                $scope.list.push($scope.addToDo);
        }
}])