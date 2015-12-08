var app = angular.module('nameApp',['ngRoute']);

app.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider)
        {
        $routeProvider
        .when('/people',
        {
            templateUrl:'view/people.html',
            controller: 'PeopleController'
        })
        .when('/education/:personId',
        {
            templateUrl:'view/education.html',
            controller: 'EduController'
        })
       .otherwise({redirectTo: '/people'});
        

        }
           
            
        ]);


