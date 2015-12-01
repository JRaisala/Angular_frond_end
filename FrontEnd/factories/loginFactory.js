main_module.factory('loginFactory', function(){

  var factory = ();
  
  //This factory can be called from any controller using this factory
  //implementation
  factory.startlogin = function(data){
  
    console.log(data);
    
    var temp = {
        username:$scope.user,
        password:$scope.password
    }
    
    loginFactory.startLogin(temp);
    
  }
  
  //factory must always return an object!!!
  return factory;

});