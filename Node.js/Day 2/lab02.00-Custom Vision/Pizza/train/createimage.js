var fs = require( 'fs' );
var path = require( 'path' );
var request = require('request');
var process = require( "process" );
require('dotenv-extended').load();

var moveFrom ='./train_image/more';

//This method is used for reading images from directory folder
fs.readdir( moveFrom, function( err, files ) {
        if( err ) {
            console.error( "Could not list the directory.", err );
            process.exit( 1 );
        } 

        files.forEach( function( file, index ) {
                var fromPath = path.join( moveFrom, file );

                fs.stat( fromPath, function( error, stat ) {
                    if( error ) {
                        console.error( "Error stating file.", error );
                        return;
                    }

                    if( stat.isFile() ){
                    createimage(fromPath);
                    }
                    else if( stat.isDirectory() ){
                    createimage(fromPath);
                    }

                                        } );
                } );
        } );

//This function is used for uploading images to the corresponding user defined tag
function createimage(file_name)
{
   request({
  
  
  headers:{
    'Training-key': process.env.Trainingkey,
    'Content-Type':'application/octet-stream'
  },
  
  uri:'https://southcentralus.api.cognitive.microsoft.com/customvision/v2.0/Training/projects/'+process.env.projectid+'/images?tagIds='+process.env.tagid,
 
  body:fs.readFileSync(file_name),
  method: 'POST'
}, function (err, res, body) {
  if (err) {
    console.log(err);
  }
  else if(res.body){
   
     var temp=JSON.parse(res.body);
     console.log("isBatchSuccessful:"+temp.isBatchSuccessful);
  }
});

}