/**
 * Created by Snooze on 17/10/2016.
 */
var aos = angular.module('AOS');

var baseUrl = '';
function parseItems(items){
    return new Promise(function (fulfill, reject){
        var ret = [];
        // var ret = {};
        for (i in items){
            ret.push(parseFloat(items[i]));
            // ret['arg'+i] = parseFloat(items[i]);
            if (isNaN(parseFloat(items[i]))){
                ret = false;
                break
            }
        }
        if (ret)
            fulfill(ret);
        else
            reject(ret)
    });
}

// var baseUrl = 'http://localhost:8080/';
aos.factory('Fact_Calculadora', [ '$soap', function ($soap) {
    return {
        suma: function(a,b, token){
            if (token) {
                return $soap.post(baseUrl + "services/Calculator", "sum", {arg0: a, arg1: b, arg2: token});
            } else {
                return $soap.post(baseUrl + "services/Calculator", "sum", {arg0: a, arg1: b});
            }
        },
        resta: function(a,b, token){
            if (token) {
                return $soap.post(baseUrl + "services/Calculator", "les", {arg0: a, arg1: b, arg2: token});
            } else {
                return $soap.post(baseUrl + "services/Calculator", "les", {arg0: a, arg1: b});
            }
        },
        multiplicacion: function(a,b, token){
            if (token) {
                return $soap.post(baseUrl + "services/Calculator", "prod", {arg0: a, arg1: b, arg2: token});
            } else {
                return $soap.post(baseUrl + "services/Calculator", "prod", {arg0: a, arg1: b});
            }
        },
        division: function(a,b, token){
            if (token) {
                return $soap.post(baseUrl + "services/Calculator", "div", {arg0: a, arg1: b, arg2: token});
            } else {
                return $soap.post(baseUrl + "services/Calculator", "div", {arg0: a, arg1: b});
            }
        },
        media: function (items, token) {
            return parseItems(items).then(
                function (sendata) {
                    if (token) {
                        return $soap.post(baseUrl + "services/Calculator", "avg", {arg0: sendata, arg1: token});
                    } else {
                        return $soap.post(baseUrl + "services/Calculator", "avg", {arg0: sendata});
                    }
                }
            )
        },
        minimo: function (items, token) {
            return parseItems(items).then(
                function (sendata) {
                    if (token) {
                        return $soap.post(baseUrl + "services/Calculator", "min", {arg0: sendata, arg1: token});
                    } else {
                        return $soap.post(baseUrl + "services/Calculator", "min", {arg0: sendata});
                    }
                }
            );
        },
        maximo: function (items, token) {
            return parseItems(items).then(
                function (sendata) {
                    if (token) {
                        return $soap.post(baseUrl + "services/Calculator", "max", {arg0: sendata, arg1: token});
                    } else {
                        return $soap.post(baseUrl + "services/Calculator", "max", {arg0: sendata});
                    }
                }
            );
        }
    }
}]);