var request = require('request');
var fs=require('fs');
require('dotenv-extended').load();

var prompt = require('prompt');

var personGroupId;
var Name; 


getinfo();

function getinfo()
{
   prompt.get(['personGroupId', 'Name'], function (err, result) {
   personGroupId=result.personGroupId;
   Name=result.Name;

   creategroup();   
  });

}


//This function is used for creating group
function creategroup()
{

var body={
    "name": Name
}
var data=JSON.stringify(body);

  request({
  
  
  headers:{
    'Ocp-Apim-Subscription-Key':process.env.subcriptionkey,
    'Content-Type':'application/json'
  },
  
  uri:'https://'+process.env.location+'.api.cognitive.microsoft.com/face/v1.0/persongroups/'+personGroupId,
 
  body:data,
  method: 'PUT'
}, function (err, res, body) {
  if (err) {
    console.log(err);
  }
  else if(res.body==''){
    console.log('Group is Created.');
  }
});

}


    
