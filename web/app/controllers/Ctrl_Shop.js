/**
 * Created by Snooze on 17/10/2016.
 */
var aos = angular.module('AOS');

aos.controller('Ctrl_Shop',['$scope','$rootScope', 'Fact_Shop', 'Fact_Utils', function($scope, $rootScope, factory, utils){
    $scope.carrito = [];

    $scope.searchdata = {};

    function changeMoney(){
        console.log("Change Money");

        var n = [], j;
        for (item in $scope.carrito){
            n.push($scope.carrito[item].price);
            console.log($scope.carrito[item].price)
        }
        var i = $scope.unit;
        if (i=="$"){
            j = ""+'\u20ac';
        } else {
            j = ""+'$';
        }

        utils.change(n,i,j).then(function (data) {
            if (data){
                if (Array.isArray(data)){
                    // console.log('Array');
                    for (var w in data){
                        $scope.carrito[w].price = data[w];
                    }
                } else {
                    // console.log('Not array');
                    $scope.carrito[0].price = data;
                }
            }
        }, function (err) {
            console.log('Catch error');
            console.log(err);
        })
    }

    $scope.radioModel = 1;
    $scope.changeModel = function (i) {
        $scope.radioModel = i;
        if (i==1){
            $scope.unit = ""+'\u20ac';
        } else {
            $scope.unit = ""+'$';
        }
        changeMoney();
    };
    $scope.unit = ""+'\u20ac';

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
                    if (Array.isArray(data)) {
                        $scope.carrito = data;
                    } else {
                        var arr = [];
                        arr.push(data);
                        $scope.carrito = arr
                    }
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