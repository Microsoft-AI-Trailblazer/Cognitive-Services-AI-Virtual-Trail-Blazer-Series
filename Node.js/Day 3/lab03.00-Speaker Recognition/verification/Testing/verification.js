var request = require('request');
var fs=require('fs');
require('dotenv-extended').load();
var data =fs.readFileSync('./su.wav');

verification();


function verification()
{
  request({
  headers:{
    'Ocp-Apim-Subscription-Key':process.env.subcriptionkey,
    'Content-Type':'application/octet-stream'
  },
  uri:'https://westus.api.cognitive.microsoft.com/spid/v1.0/verify?verificationProfileId='+process.env.verificationProfileId,
  body:data,
  method: 'POST'
}, function (err, res, body) {
  if (err) {
    console.log(err);
  }
  else if(res.body){
    //console.log("what is there in res.body",res.body);
    var temp=JSON.parse(res.body)
    if (temp.error==undefined) {
         console.log("Result :"+temp.result+"\nConfidence :"+temp.confidence+"\nphrase :"+temp.phrase);
    }
    else{
    console.log("Error :"+temp.error.message);
     }
   } 
});

}

