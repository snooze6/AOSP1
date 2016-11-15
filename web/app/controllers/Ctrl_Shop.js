/**
 * Created by Snooze on 17/10/2016.
 */
var aos = angular.module('AOS');

aos.controller('Ctrl_Shop',['$scope','$rootScope', 'Fact_Shop', function($scope, $rootScope, factory){
    $scope.carrito = [];
    $rootScope.section = 'projects';
    factory.getItems().then(function (data, err) {
        if (data){
            $scope.carrito = data
        }
    });
}]);

aos.controller('Ctrl_Shop_Item',['$scope','$rootScope', '$routeParams', 'Fact_Shop', function($scope, $rootScope, $routeParams, factory){
    console.log('Hello from Item '+$routeParams.pId);

    var item = parseInt($routeParams.pId);
    $rootScope.section = 'projects';
    factory.getItem(item).then(function (data, err) {
        if (data){
            console.log(data);
            $scope.item = data
        }
    });
}]);