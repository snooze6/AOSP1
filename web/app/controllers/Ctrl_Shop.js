/**
 * Created by Snooze on 17/10/2016.
 */
var aos = angular.module('AOS');

aos.controller('Ctrl_Shop',['$scope','$rootScope', 'Fact_Shop', function($scope, $rootScope, factory){
    console.log('Hello from Shop '+2);

    function displayandsave(data) {
        console.log(data)
    }

    $scope.carrito = [];
    $rootScope.section = 'projects';
    factory.getItems().then(function (data, err) {
        if (data){
            $scope.carrito = data
        }
    });
}]);