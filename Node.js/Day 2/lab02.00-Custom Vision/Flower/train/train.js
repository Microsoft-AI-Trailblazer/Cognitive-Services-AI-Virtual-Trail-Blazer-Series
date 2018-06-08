var request = require('request');
require('dotenv-extended').load();



train();

//This function is used for training the project
function train()
{

   request({
  
  
  headers:{
    'Training-key': process.env.Trainingkey
  },
  
  uri:'https://southcentralus.api.cognitive.microsoft.com/customvision/v2.0/Training/projects/'+process.env.projectid+'/train',
 
  method: 'POST'
}, function (err, res, body) {
  if (err) {
    console.log(err);
  }
  else if(res.body){
     var temp=JSON.parse(res.body);
     console.log("Complete  :"+temp.name+"\nIteration ID :"+temp.id);
  }
});

}