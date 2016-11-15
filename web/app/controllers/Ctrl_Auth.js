/**
 * Created by Snooze on 17/10/2016.
 */
var aos = angular.module('AOS');

aos.controller('Ctrl_Auth',['$scope','$rootScope', 'Fact_Auth', function($scope, $rootScope, factory){
    console.log('Hello werl');

    $rootScope.section = 'auth';

}]);