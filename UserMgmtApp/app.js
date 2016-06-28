/**
 * Created by abhishekrathore on 6/23/16.
 */
var app = angular.module("test",["ngRoute","LocalForageModule"]);

app.config(function($routeProvider){

    $routeProvider
        .when("/add",{"templateUrl":"add.html"})
        .when("/list",{"templateUrl":"list.html"})
        .when("/modify/:id",{"templateUrl":"modify.html"})

})




app.controller("addCtrl",function(dataService,$scope,$location,$localForage){


    $scope.users=dataService.users;

    $scope.add = function(user){
        $scope.users.push(user);

        $localForage.setItem("users",$scope.users);
        console.log($scope.users);
        $location.path("/list");

    }

    console.log("addCtrl working");
})


app.controller("listCtrl",function(dataService,$scope,$localForage){

    $scope.users = dataService.users;

    console.log("listCtrl working");

    $scope.custom = function(iterator,input){

        var keys = [];


        if($scope.all){keys.push("name","age","email","phone");}
       else {

            if ($scope.name)keys.push("name");
            if ($scope.age)keys.push("age");
            if ($scope.phone)keys.push("phone");
            if ($scope.email)keys.push("email");
        }

       for(i=0;i<keys.length;i++){

           if(iterator[keys[i]] == input) return true;
       }

        return false;



    }





})


app.controller("modifyCtrl",function(dataService,$scope,$routeParams,$location,$localForage){
    $scope.user=dataService.users[$routeParams.id];
    console.log("modifyCtrl working");

    $scope.update=function(){
        $localForage.setItem("users",dataService.users);
        $location.path("/list")
    }

})


app.service("dataService",function($localForage){

    this.users =[];


    (function(users){ //users == this.users

        $localForage.getItem("users").then(function(data){
            console.log(data);

            for(i=0;i<data.length;i++){
                users.push(data[i]); //so that refernce dont change
            }
        })



    })(this.users); //this is a closure.




})