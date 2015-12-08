var express = require('express');
var nodeApp = express();
var PORT = process.env.OPENSHIFT_NODEJS_PORT || 8080;

nodeApp.use(express.static(__dirname + '/'));

nodeApp.get('/people/:id', function(req, res){
  var personId = parseInt(req.params.id );
  var data = {};
  for (var i=0, len=people.length;i<len;i++){
      if(people[i].id === personId){
          data = people[i];
          break;
      }
  
  }
    res.json(data);
});

nodeApp.get('/people', function(req, res){
  res.json(people);
});
nodeApp.listen(PORT, function(){
    console.log("starting Server!")
});

var people = [
                {id: 1,name:'Mhu Htet',township:'Hlaing', age:'24', born:'1992-07-05', income:'450', grade: [{
                    school : 'Dagon University',
                    education : 'Graduated'
                    
                }]
                }, 
                {id: 2,name:'Yin Myat Mon',township:'South Okkalarpa', age:'27', born:'1989-09-27', income:'380', grade: [{
                    school : 'Dagon University',
                    education : 'Graduated'
                    
                }]
                },   
                {id: 3,name:'Pine Hein Kyaw',township:'Hlaing', age:'16', born:'2000-07-23', income:'210', grade: [{
                    school : 'High School',
                    education: 'Grade-11'
                    
                }]} 
            ];