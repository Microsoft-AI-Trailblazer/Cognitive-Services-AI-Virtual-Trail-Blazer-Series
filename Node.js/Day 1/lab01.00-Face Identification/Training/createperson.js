var request = require('request');
var fs=require('fs');
require('dotenv-extended').load();
var prompt = require('prompt');

var personGroupId;
var Person_name; 


getinfo();

function getinfo()
{
   prompt.get(['Person_name'], function (err, result) {
   Person_name=result.Person_name;

   createperson();   
  });

}

//This function is used for creating person id
function createperson()
{

	var body={
    "name":Person_name
}
var data=JSON.stringify(body);

  request({
  
  
  headers:{
    'Ocp-Apim-Subscription-Key':process.env.subcriptionkey,
    'Content-Type':'application/json'
  },
  
  uri:'https://'+process.env.location+'.api.cognitive.microsoft.com/face/v1.0/persongroups/'+process.env.personGroupId+'/persons',
 
  body:data,
  method: 'POST'
}, function (err, res, body) {
  if (err) {
    console.log(err);
  }
  else if(res.body){
  	var temp=JSON.parse(res.body)
    console.log('Person ID :'+temp.personId);
  }
});





}
