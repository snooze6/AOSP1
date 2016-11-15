/**
 * Created by Snooze on 17/10/2016.
 */
var aos = angular.module('AOS');

aos.controller('Ctrl_Shop',['$scope','$rootScope', 'Fact_Shop', function($scope, $rootScope, factory){
    $scope.carrito = [];

    $scope.searchdata = {};

    factory.getItems().then(function (data, err) {
        if (data){
            $scope.carrito = data
        }
    });

    $scope.search = function(){
        if ($scope.searchdata.str){
            // console.log('Searching for '+$scope.searchdata.str);
            factory.searchItem($scope.searchdata.str).then(function (data, err) {
                if (data){
                    if (Array.isArray(data))
                        $scope.carrito = data;
                    else
                        var arr = [];
                            arr.push(data);
                        $scope.carrito = arr
                }
            })

        }
    }
}]);

aos.controller('Ctrl_Shop_Item',['$scope','$rootScope', '$routeParams', 'Fact_Shop', function($scope, $rootScope, $routeParams, factory){
    // console.log('Hello from Item '+$routeParams.pId);

    var item = parseInt($routeParams.pId);
    factory.getItem(item).then(function (data, err) {
        if (data){
            $scope.item = data
        }
    });
}]);