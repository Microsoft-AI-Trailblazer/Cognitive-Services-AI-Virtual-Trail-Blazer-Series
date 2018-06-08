var request = require('request');
var fs=require('fs');
require('dotenv-extended').load();

var verificationProfileId;
var locale={
  "locale":"en-us",
}

var c=JSON.stringify(locale);

createprofile();


function createprofile()
{
  request({
  headers:{
    'Ocp-Apim-Subscription-Key':process.env.subcriptionkey,
    'Content-Type':'application/json'
  },
  uri:'https://westus.api.cognitive.microsoft.com/spid/v1.0/verificationProfiles',
  body:c,
  method: 'POST'
}, function (err, res, body) {
  if (err) {
    console.log(err);
  }
  else if(res.body){
    var temp=JSON.parse(res.body)
    verificationProfileId=temp.verificationProfileId;
   console.log("verificationProfileId :"+verificationProfileId);
  }
});

}


