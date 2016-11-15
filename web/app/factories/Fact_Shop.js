/**
 * Created by Snooze on 17/10/2016.
 */
var aos = angular.module('AOS');

var baseUrl = '';

// var baseUrl = 'http://localhost:8080/';
aos.factory('Fact_Shop', [ '$soap', function ($soap) {
    return {
        getItems: function (token) {
            if (token) {
                return $soap.post(baseUrl + "services/Shop", "getItems", {arg0: token});
            } else {
                return $soap.post(baseUrl + "services/Shop", "getItems");
            }
        },
        getItem: function (id, token) {
            if (token) {
                return $soap.post(baseUrl + "services/Shop", "getItemId", {arg0: id, arg1: token});
            } else {
                return $soap.post(baseUrl + "services/Shop", "getItemId", {arg0: id});
            }
        },
        searchItem: function (autor, token) {
            if (token) {
                return $soap.post(baseUrl + "services/Shop", "getItemAutor", {arg0: autor, arg1: token});
            } else {
                return $soap.post(baseUrl + "services/Shop", "getItemAutor", {arg0: autor});
            }
        }
    }
}]);