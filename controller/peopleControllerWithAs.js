function PeopleController() {
            this.sortBy = 'name';
            this.reverse = false;
            this.people=[{name:'Mhu Htet',township:'Hlaing', age:'24', born:'1992-07-05', income:'450'}, {name:'Yin Myat Mon',township:'South Okkalarpa', age:'27', born:'1989-09-27', income:'380'},{name:'Pine Hein Kyaw',township:'Hlaing', age:'16', born:'2000-07-23', income:'210'}];
            this.doSort = function(propName){
            this.sortBy = propName;
            this.reverse = !this.reverse;
           
            };
        
        }
        