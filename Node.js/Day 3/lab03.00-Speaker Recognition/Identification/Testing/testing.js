var request = require('request');
var fs=require('fs');
var data =fs.readFileSync('./voice/golu.wav');
var identificationProfileId;
var  oprationid;
require('dotenv-extended').load();

identification();

function identification()
{

  
request({
  
  headers:{
    'Ocp-Apim-Subscription-Key':process.env.subcriptionkey
  },
  
  uri:'https://westus.api.cognitive.microsoft.com/spid/v1.0/identify?identificationProfileIds='+process.env.identificationProfileId+'&shortAudio=true',
  body:data,
  method: 'POST'
}, function (err, res, body) {
  if (err) {
    console.log(err);
  }
  else {
    ds=res.headers['operation-location'];
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
  request({

  headers:{
    'Ocp-Apim-Subscription-Key':'35691d07019c4742994428739217e158'
  },
  uri:'https://westus.api.cognitive.microsoft.com/spid/v1.0/operations/'+ oprationid,
  method: 'GET'
}, function (err, res, body) {
  if (err) {
    console.log("hetedddd",err);
  }
  else {

    var temp=JSON.parse(res.body);
    if(temp.error==undefined)
    {
      console.log("Detected identificationProfileId :"+temp.processingResult.identifiedProfileId+"\nConfidence :"+temp.processingResult.confidence);

    }
    else{
      console.log("Error :"+temp.error.message);

    }
  }
});
}