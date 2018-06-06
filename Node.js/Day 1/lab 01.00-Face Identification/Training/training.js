var request = require('request');
var fs=require('fs');
require('dotenv-extended').load();
var prompt = require('prompt');



hittraining();


//This function is used for hitting the training api
function hittraining()
{


  request({
  headers:{
    'Ocp-Apim-Subscription-Key':process.env.subcriptionkey
    
  },
  
  uri:'https://'+process.env.location+'.api.cognitive.microsoft.com/face/v1.0/persongroups/'+process.env.personGroupId+'/train',
  method: 'POST'
}, function (err, res, body) {
  if (err) {
    console.log(err);
  }
  else if(res.body==''){
    
    getstatus();
  }
});

}


//This function is used for getting the status of training.
function getstatus()
{

    request({
  headers:{
    'Ocp-Apim-Subscription-Key':process.env.subcriptionkey
    
  },
  
  uri:'https://'+process.env.location+'.api.cognitive.microsoft.com/face/v1.0/persongroups/'+process.env.personGroupId+'/training',
  method: 'GET'
}, function (err, res, body) {
  if (err) {
    console.log(err);
  }
  else if(res.body){
    
    var temp=JSON.parse(res.body);
    console.log("Training Status : "+temp.status);
    
  }
});



}




    