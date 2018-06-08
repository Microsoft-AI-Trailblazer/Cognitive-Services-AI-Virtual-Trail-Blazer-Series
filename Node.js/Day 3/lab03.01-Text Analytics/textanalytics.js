var request = require('request');
//var fs=require('fs');
var prompt = require('prompt');
require('dotenv-extended').load();
var prompt = require('prompt');
var text;
var score;
var phrases;
var language;
var Entities;



prompt.get(['Text'], function (err, result) {
text=result.Text;
getsentiment(text);
    
  });



function getsentiment()
{

var data={
  "documents": [
    {
      "language":process.env.language,
      "id": "1",
      "text":text 
    }
  ]
}

var temp=JSON.stringify(data);

request({
  
  headers:{
    'Ocp-Apim-Subscription-Key':process.env.subscriptionkey,
     'Content-Type':'application/json'
  },  
  uri:'https://westcentralus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment',
  body:temp,
  method: 'POST'
}, function (err, res, body) {
  if (err) {
    console.log(err);
  }
  else {
    var temp=JSON.parse(body);
    score=temp.documents[0].score;
    keyphrases();
  }
});

}

function keyphrases()
{
   var data={
  "documents": [
    {
      "language":process.env.language,
      "id": "1",
      "text":text 
    }
  ]
}

var temp=JSON.stringify(data);


	request({
  
  headers:{
    'Ocp-Apim-Subscription-Key':process.env.subscriptionkey,
     'Content-Type':'application/json'
  },  
  uri:'https://westcentralus.api.cognitive.microsoft.com/text/analytics/v2.0/keyPhrases',
  body:temp,
  method: 'POST'
}, function (err, res, body) {
  if (err) {
    console.log(err);
  }
  else {
  	var temp=JSON.parse(body);
     var s="";
     var g=",";
    for(var i=0;i<temp.documents[0].keyPhrases.length;i++)
    {
      if(i==temp.documents[0].keyPhrases.length-1)
      {
        g=" "
        s=s+temp.documents[0].keyPhrases[i]+g;
       }else{
         s=s+temp.documents[0].keyPhrases[i]+g;
       }
     }
     phrases=s;
     entities();
    
  }
});

}


function entities()
{
   var data={
  "documents": [
    {
      "language":process.env.language,
      "id": "1",
      "text":text 
    }
  ]
}

var temp=JSON.stringify(data);


	request({
  
  headers:{
    'Ocp-Apim-Subscription-Key':process.env.subscriptionkey,
     'Content-Type':'application/json'
  },  
  uri:'https://westcentralus.api.cognitive.microsoft.com/text/analytics/v2.0/entities',
  body:temp,
  method: 'POST'
}, function (err, res, body) {
  if (err) {
    console.log(err);
  }
  else {
  
  	var temp=JSON.parse(body);

  	 var s="";
     var g=",";
    for(var i=0;i<temp.documents.length;i++)
    {
      for(var j=0;j<temp.documents[i].entities.length;j++)
      {
          
           if(i==temp.documents[i].entities.length-1){
              g=" "
              s=s+temp.documents[i].entities[j].name+g;
            }else{
              s=s+temp.documents[i].entities[j].name+g;
            }
       }  
    }
    Entities=s;
    language();         
  }
});


}


function language()
{
	
   var data={
  "documents": [
    {
      "language":process.env.language,
      "id": "1",
      "text":text 
    }
  ]
}

var temp=JSON.stringify(data);


	request({
  
  headers:{
    'Ocp-Apim-Subscription-Key':process.env.subscriptionkey,
     'Content-Type':'application/json'
  },  
  uri:'https://westcentralus.api.cognitive.microsoft.com/text/analytics/v2.0/languages',
  body:temp,
  method: 'POST'
}, function (err, res, body) {
  if (err) {
    console.log(err);
  }
  else {    
  	var temp=JSON.parse(body);
  	language=temp.documents[0].detectedLanguages[0].name;
  	var sentiment;
     if((score>0)&&(score<0.5))
     {
      sentiment='Negative';
     }else if((score==0.5))
     {
     	sentiment='Neutral';
     }else if((score>0.5)&&(score<=1)){
        sentiment='Positive';
     }

  	console.log("---------------------------TEXT Analytics-------------------"+"\nText   :"+text+"\nLanguage :"+language+"\nPhrases :"+phrases+"\nSentiment :"+sentiment+"\nEntities :"+Entities);
  }
});


}



