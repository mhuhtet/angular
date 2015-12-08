var peopleFactory =function ($http){
    var factory = {};
    factory.getPeople = function () {
       return $http.get('/people')       
    };
   
    factory.getPerson = function (personId) {
      return $http.get('/people/' + personId);
    };
    
    return factory;
};

peopleFactory.$inject = ['$http'];
app.factory('peopleFactory', peopleFactory);
  



