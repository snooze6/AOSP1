/**
 * Created by Snooze on 17/10/2016.
 */
var aos = angular.module('AOS');

aos.controller('Ctrl_Shop',['$scope','$rootScope', 'Fact_Shop', function($scope, $rootScope, factory){
    $rootScope.section = 'projects';

    console.log('Loaded Ctrl_Shop');

    // $scope.carrito = factory.getItems();
}]);