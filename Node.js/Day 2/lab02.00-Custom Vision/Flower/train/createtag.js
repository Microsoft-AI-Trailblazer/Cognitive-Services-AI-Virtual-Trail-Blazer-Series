var request = require('request');
var prompt = require('prompt');
require('dotenv-extended').load();

var tag_name;

getinfo();
//This function is used for getting tag name from user
function getinfo()
{
   prompt.get(['tag_name'], function (err, result) {
   
   tag_name=result.tag_name;


   createtag();   
  });

}
//This function is used for creating tags
function createtag()
{

  request({
  
  
  headers:{
    'Training-key': process.env.Trainingkey
  },
  
   uri:'https://southcentralus.api.cognitive.microsoft.com/customvision/v2.0/Training/projects/'+process.env.projectid+'/tags?name='+tag_name,
 
  
  method: 'POST'
}, function (err, res, body) {
  if (err) {
    console.log(err);
  }
  else if(res.body){
   var temp=JSON.parse(res.body);
   console.log("Tag ID  :"+temp.id+"\nTag Name :"+temp.name);
  }
});

}

