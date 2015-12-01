//Here we create out main module. First argument in the name of the module, the second one
//the '[] array' constrains the dependencies to other angular modules
var main_module = angular.module('main_module',['ngRoute']);

//cREATE basic configuration for our angular app.
//Configuration includes USUALLY a router for our views.
//The $routerPRovider object comes from ngRoute module
main_module.config(function($routeProvider){
  
    $routeProvider.when('/',{
      
      templateUrl:'partial_login.html',
      controller:'controllerLogin'
    });
});

  