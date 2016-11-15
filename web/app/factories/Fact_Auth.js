/**
 * Created by Snooze on 17/10/2016.
 */
var aos = angular.module('AOS');

var baseUrl = '';

// var baseUrl = 'http://localhost:8080/';
aos.factory('Fact_Auth', [ '$soap', function ($soap) {
    return {
        login: function (username, password) {
            return $soap.post(baseUrl+"services/Auth", "login", {arg0: username, arg1: password});
        },
        register: function (username, password) {
            return $soap.post(baseUrl+"services/Auth", "register", {arg0: username, arg1: password});
        },
        valid: function (token) {
            return $soap.post(baseUrl+"services/Auth", "valid", {arg0: token});
        }
    }
}]);