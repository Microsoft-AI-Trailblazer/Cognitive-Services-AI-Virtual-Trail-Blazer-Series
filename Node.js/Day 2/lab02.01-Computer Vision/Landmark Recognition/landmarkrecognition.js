var request = require('request');
var fs=require('fs');
require('dotenv-extended').load();
var data =fs.readFileSync('./images/whitehouse.jpg');


getimagedetail();
function getimagedetail()
{
	
request({
  
  headers:{
    'Ocp-Apim-Subscription-Key':process.env.subcriptionkey,
     'Content-Type':'application/octet-stream'
  },  
  uri:'https://westcentralus.api.cognitive.microsoft.com/vision/v2.0/analyze?details=Landmarks',
  body:data,
  method: 'POST'
}, function (err, res, body) {
  if (err) {
    console.log(err);
  }
  else {
   var m=JSON.parse(body);
   console.log("Recognized Landmark:"+m.categories[0].detail.landmarks[0].name);
            
  }
});
}
