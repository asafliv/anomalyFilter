'use strict';

angular.module('asafApp')
    .controller('AnomalyCtrl', function ($scope,$http) {
        debugger;
        $http.get('../anomaly.json')
            .then(function(res){
                debugger;
                $scope.todos = res.data;

            });
    });
