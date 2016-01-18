//Create new directive with name ofExamle
main_module.directive('ofExample',function(){
  
  
  //Create empty object. We will fill it with needed
  //information below.
  var directive = {};
  //First define how our directive can be used using stric attribute
  //possible values are;
  //'A' as attribute
  //'C' as class
  //'E' as element
  //'M' as comment
  //or combination of previous values like 'AE'
  directive.restric = 'AEC';
  //Define the template code
  directive.templateURL = "/FrontEnd/directives/content.html";
  //We must always return an object from directive;
  return directive;

});