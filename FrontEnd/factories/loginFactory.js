main_module.factory('loginFactory', function($resource){

  var factory = {};
  
  //This factory can be called from any controller using this factory
  //implementation
  factory.startLogin = function(data){
  
     console.log('loginFactory');
    console.log(data);
    //create a resource for context 'friends/login'
    var req = $resource('/friends/login',{},{'post':{method:'POST'}});
    //Use POST method to send the username and password to above context
    //Note that we return an promise object from here
    return req.post(data).$promise;
    
  }
  
  //factory must always return an object!!!
  return factory;

});