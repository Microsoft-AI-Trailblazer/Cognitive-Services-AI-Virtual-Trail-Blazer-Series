var request = require('request');
var fs=require('fs');
require('dotenv-extended').load();
var data =fs.readFileSync('./voice/chandru.wav');
var identificationProfileId;
var  oprationid;

createprofile();

function createprofile()
{
   const data={
    'locale':'en-us',
}   
request({
  headers:{
    'Ocp-Apim-Subscription-Key':process.env.subcriptionkey
  },
  uri:'https://westus.api.cognitive.microsoft.com/spid/v1.0/identificationProfiles',
  body:JSON.stringify(data),
  method: 'POST'
}, function (err, res, body) {
  if (err) {
    console.log(err);
  }
  else {
    var temp=JSON.parse(res.body);
    if(temp.error==undefined)
    {
    identificationProfileId=temp.identificationProfileId;
    console.log("identificationProfileId :"+identificationProfileId);
    uploadvoice();
    }
    else
    {
      console.log("Error :"+temp.error.message);
    }
    
  }
});
}

function uploadvoice()
{
request({
  
  headers:{
    'Content-Type': 'application/octet-stream',
    'Ocp-Apim-Subscription-Key':process.env.subcriptionkey
  }, 

  uri:'https://westus.api.cognitive.microsoft.com/spid/v1.0/identificationProfiles/{'+identificationProfileId+'}/enroll?shortAudio=true',
  body:data,
  method: 'POST'
}, function (err, res, body) {
  if (err) {
    console.log("this is error",err);
  }
  else {
    var ds=res.headers['operation-location'];
    var op = ds.split('/')
   oprationid=op[op.length-1];
    setTimeout(function(){
        getopstatus();
       }, 5000);
    
  }
});
}

function getopstatus()
{
  //console.log("----------------here error---------------------");
  request({
  headers:{
    'Ocp-Apim-Subscription-Key': process.env.subcriptionkey
  },
  uri:'https://westus.api.cognitive.microsoft.com/spid/v1.0/operations/'+ oprationid,
  method: 'GET'
}, function (err, res, body) {
  if (err) {
    console.log("hetedddd",err);
  }
  else {
    //console.log("what is the ",res.body);
    var temp=JSON.parse(res.body);
    if(temp.error==undefined)
    {
      console.log("Status : "+temp.status+"\noperation ID :"+oprationid+"\nidentificationProfileId :"+identificationProfileId);
    }
    else
    {
      console.log("Error :"+temp.error.message)
    }
    

  }
});
}
  
