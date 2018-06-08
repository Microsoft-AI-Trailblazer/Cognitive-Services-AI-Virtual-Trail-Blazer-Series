var request = require('request');
var fs=require('fs');
require('dotenv-extended').load();

var data =fs.readFileSync('./images/satya.jpg');


addfaces();

//This function is used for adding faces.
function addfaces()
{

	
  request({
  
  
  headers:{
    'Ocp-Apim-Subscription-Key':process.env.subcriptionkey,
    'Content-Type':'application/octet-stream'
  },
  
  uri:'https://'+process.env.location+'.api.cognitive.microsoft.com/face/v1.0/persongroups/'+process.env.personGroupId+'/persons/'+process.env.personId+'/persistedFaces',
 
  body:data,
  method: 'POST'
}, function (err, res, body) {
  if (err) {
    console.log(err);
  }
  else if(res.body){
    console.log(res.body);
  	var temp=JSON.parse(res.body)
      if(temp.persistedFaceId!='')
      {
        console.log("Person Image is added successfully.")
      }else{
        console.log("adding Image failed.")
      }
  }
});





}
