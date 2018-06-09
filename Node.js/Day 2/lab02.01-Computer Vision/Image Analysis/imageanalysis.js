var request = require('request');
var fs=require('fs');
require('dotenv-extended').load();
var data =fs.readFileSync('./images/pic.jpg');


getimagedetail();
function getimagedetail()
{
	
request({
  
  headers:{
    'Ocp-Apim-Subscription-Key':process.env.subcriptionkey,
     'Content-Type':'application/octet-stream'
  },  
  uri:'https://westcentralus.api.cognitive.microsoft.com/vision/v2.0/analyze?visualFeatures=Tags,Description&details=Landmarks&language=en',
  body:data,
  method: 'POST'
}, function (err, res, body) {
  if (err) {
    console.log(err);
  }
  else {
   var m=JSON.parse(body);
              var w="";
              var f=",";
              var g=m.tags.length;
              for(var e=0;e<m.tags.length;e++)
              {
                
                if(e==(g-1)){
                f =".";	
                }
                w=w+m.tags[e].name+f;

              }
              var f=m.description.captions[0].text;
              console.log("Tags :"+w+"\nCaptions :"+f);
  }
});
}
