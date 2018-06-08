var fs = require("fs");
var request = require("request");
require('dotenv-extended').load();
var imageName = "./test_image/less.jpg";

var options = {
    method: 'POST',
    url: 'https://southcentralus.api.cognitive.microsoft.com/customvision/v2.0/Training/projects/' + process.env.projectid + '/quicktest/image',
    qs: {
        iterationId: process.env.iterationid
    },
    headers: {
        'cache-control': 'no-cache',
        'training-key': process.env.Trainingkey,
        'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
    },
    formData: {
        data: {
            value: fs.createReadStream(imageName),
            options: {
                filename: imageName,
                contentType: null
            }
        }
    }
};
//This function is used for testing the image
request(options, function(error, response, body) {
    if (error) throw new Error(error);

    
    var temp=JSON.parse(body);

     console.log("Tag Name  :"+temp.predictions[0].tagName+"\nProbability :"+temp.predictions[0].probability);
     console.log("Tag Name  :"+temp.predictions[1].tagName+"\nProbability :"+temp.predictions[1].probability);
     console.log("Tag Name  :"+temp.predictions[2].tagName+"\nProbability :"+temp.predictions[2].probability);

});