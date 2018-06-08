var request = require('request');
var fs=require('fs');
var data =fs.readFileSync('./images/satya.jpg');
require('dotenv-extended').load();
    
request({
  
  language:'en',
  headers:{
    'Ocp-Apim-Subscription-Key':process.env.subcriptionkey,
    'Content-Type':'application/octet-stream'
  },
  
  uri:process.env.uri,
 
  body:data,
  method: 'POST'
}, function (err, res, body) {
  if (err) {
    console.log(err);
  }
  else {
    var temp=JSON.parse(res.body)
    var smile=temp[0].faceAttributes.smile;
    var gender=temp[0].faceAttributes.gender;
    var age=temp[0].faceAttributes.age;
    var glasses=temp[0].faceAttributes.glasses;
    var emotion_anger=temp[0].faceAttributes.emotion.anger;
    var emotion_contempt=temp[0].faceAttributes.emotion.contempt;
    var emotion_disgust=temp[0].faceAttributes.emotion.disgust;
    var emotion_fear=temp[0].faceAttributes.emotion.fear
    var emotion_happiness=temp[0].faceAttributes.emotion.happiness
    var emotion_neutral=temp[0].faceAttributes.emotion.neutral
    var emotion_sadness=temp[0].faceAttributes.emotion.sadness
    var emotion_surprise=temp[0].faceAttributes.emotion.surprise;
    console.log("smile :"+smile+"\nGender :"+gender+"\nAge :"+age+"\nGlasses :"+glasses+"\n----------Emotion------\n\nAnger :"+emotion_anger+"\ncontempt :"+emotion_contempt+"\nDisgust :"+emotion_disgust+"\nFear :"+emotion_fear+"\nHappiness :"+emotion_happiness+"\nNeutral :"+emotion_neutral+"\nSadness :"+emotion_sadness+"\nSurprise :"+emotion_surprise);
   

    
  }
});