/**
 * Created by abhishekrathore on 10/15/15.
 */
angular.module('myApp', []).controller("formCtrl",function($scope,$timeout){
    ;

    $scope.call=function(){

        console.log($scope.form);

    }

    $timeout($scope.call, 1000);
})