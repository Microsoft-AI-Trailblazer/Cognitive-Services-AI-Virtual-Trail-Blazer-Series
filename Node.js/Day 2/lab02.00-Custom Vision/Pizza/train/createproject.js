var request = require('request');
var prompt = require('prompt');
require('dotenv-extended').load();

var Project_name;
var Project_Description; 
var DomainID;

getinfo();
//This function is used for getting user inputs
function getinfo()
{
 
  prompt.get(['Project_name', 'Project_Description','DomainID'], function (err, result) {
   Project_name=result.Project_name;
   Project_Description=result.Project_Description;
   DomainID=result.DomainID;

   createproject();
      
  });
  

}



//This function is used for creating project
function createproject()
{

	 request({
  
  
  headers:{
    'Training-key': process.env.Trainingkey
  },
  
  uri:'https://southcentralus.api.cognitive.microsoft.com/customvision/v2.0/Training/projects?name='+Project_name+'&description='+Project_Description+'&domainId='+DomainID,
 
  method: 'POST'
}, function (err, res, body) {
  if (err) {
    console.log(err);
  }
  else if(res.body){
     var temp=JSON.parse(res.body);
     console.log("Project ID  :"+temp.id+"\nProject Name :"+temp.name);
  }
});

}