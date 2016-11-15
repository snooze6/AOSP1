/**
 * Created by Snooze on 17/10/2016.
 */
var aos = angular.module('AOS');

aos.controller('Ctrl_Main', ['$rootScope', function ($rootScope) {
    $rootScope.section = 'projects';

    $rootScope.user = {
        username: '',
        password: '',
        token: null
    };

    console.log('Hello main')
}]);