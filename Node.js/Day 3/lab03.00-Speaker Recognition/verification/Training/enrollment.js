var request = require('request');
var fs=require('fs');
require('dotenv-extended').load();
var data =fs.readFileSync('./su.wav');


enrollment();

function enrollment()
{
   request({

  headers:{
    'Ocp-Apim-Subscription-Key':process.env.subcriptionkey,
    'Content-Type':'application/octet-stream'
  },
  uri:'https://westus.api.cognitive.microsoft.com/spid/v1.0/verificationProfiles/'+process.env.verificationProfileId+'/enroll',
  body:data,
  method: 'POST'
}, function (err, res, body) {
  if (err) {
    console.log(err);
  }
  else if(res.body){
   var temp=JSON.parse(res.body);
   if(temp.error==undefined)
   {
     console.log("enrollmentStatus :"+temp.enrollmentStatus+"\nenrollmentsCount :"+temp.enrollmentsCount+"\nenrollmentsCount :"+temp.remainingEnrollments+"\nphrase :"+temp.phrase); 
   }
   else
   {
    console.log("Error :"+temp.error.message)
   }

  
  }
});



}