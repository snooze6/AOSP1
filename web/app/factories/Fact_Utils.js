/**
 * Created by Snooze on 17/10/2016.
 */
var aos = angular.module('AOS');

var baseUrl = '';

// var baseUrl = 'http://localhost:8080/';
aos.factory('Fact_Utils', [ '$soap', function ($soap) {
    return {
        stats: function (txt, word, token) {
            if (token) {
                return $soap.post(baseUrl + "services/Utils", "stats", {arg0: txt, arg1: word, arg2: token});
            } else {
                return $soap.post(baseUrl + "services/Utils", "stats", {arg0: txt, arg1: word});
            }
        },
        length: function (txt, token) {
            if (token) {
                return $soap.post(baseUrl + "services/Utils", "length", {arg0: txt, arg1: token});
            } else {
                return $soap.post(baseUrl + "services/Utils", "length", {arg0: txt});
            }
        },
        change: function (numbers, i, o, token) {
            if (token) {
                return $soap.post(baseUrl+"services/Utils", "change", {arg0: numbers, arg1:i, arg2:o, arg3: token});
            } else {
                return $soap.post(baseUrl+"services/Utils", "change", {arg0: numbers, arg1:i, arg2:o});
            }
        }

    }
}]);