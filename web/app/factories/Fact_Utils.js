/**
 * Created by Snooze on 17/10/2016.
 */
var aos = angular.module('AOS');

var baseUrl = '';

// var baseUrl = 'http://localhost:8080/';
aos.factory('Fact_Utils', [ '$soap', function ($soap) {
    return {
        stats: function (txt, word) {
            return $soap.post(baseUrl+"services/Utils", "stats", {arg0: txt, arg1: word});
        },
        length: function (txt) {
            return $soap.post(baseUrl+"services/Utils", "length", {arg0: txt});
        }

    }
}]);