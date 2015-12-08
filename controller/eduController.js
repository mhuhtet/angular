app.controller('EduController',['$scope','$routeParams', 'peopleFactory',
function ($scope, $routeParams, peopleFactory) {
    
            var personId = $routeParams.personId;
            $scope.people = null;
            
            function init() {
       peopleFactory.getPerson(personId)
       .success(function(people){
           $scope.people = people;
       })
        .error (function(data, status, headers, config)               { 
                 //handleerror 
             });
                
               }
            console.log(personId);
          
    
          
            init();
}]);
            
        
       
                                
   