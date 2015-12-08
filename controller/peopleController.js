app.controller('PeopleController',['$scope', 'peopleFactory',
function ($scope, peopleFactory) {
            $scope.sortBy = 'name';
            $scope.reverse = false;
            
            $scope.people = [];
            
            function init() {     
             peopleFactory.getPeople()
                 .success(function(people){
                 $scope.people = people;
             })
             .error (function(data, status, headers, config)               { 
                 //handleerror 
                 console.log('No Data is loading');
             })
            }
            init();
    
            $scope.doSort = function(propName){
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
           
            };
            
    }]);
   