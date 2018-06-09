# Face Identification
In this lab you will analyze Face API which is used to detect the face of person  
against group of trained images.

Note:Please refer the following link for more information [Face API](https://azure.microsoft.com/en-in/services/cognitive-services/face/).

### Prerequisites
The following software environment is needed for running this API :
```
1.Node.js
```

### Collecting the keys

Over the course of this lab, we will collect various keys. It is recommended that you save all of them in a text file, so you can easily access them throughout the workshop.keys:

```
-Face API subscription key
```


### Implementation

To check implementation of this lab please refer to the following path :"Cognitive-Services-AI-Virtual-Trail-Blazer-Series/Node.js/Day 1/lab01.00-Face Identification".Implementation of this lab is divided into two parts:

* Training part
* Testing part

### To check implementation go through following steps :

step 1 :open .env file in the lab01.00-Face Identification folder and paste subscription key and location for which api key is generated,.

step 2 :To create group open the following file in this path :Cognitive-Services-AI-Virtual-Trail-Blazer-Series/Node.js/Day 1/lab01.00-Face Identification/Training/".

```
CreateGroup.js

```
On cmd enter groupid and name.The following snapshots show the Running results of following CreateGroup.js :

![grp](https://user-images.githubusercontent.com/31923904/41191042-e3a9854a-6c06-11e8-9b9a-090bdcb5b4f8.png)

Step 3 :open .Env file in Training folder and paste group id which is created.To create identification profile id for person open the following file in the path :
Cognitive-Services-AI-Virtual-Trail-Blazer-Series/Node.js/Day 1/lab01.00-Face Identification/Training/ and run on Cmd:

```
createprofile.js

```
On cmd enter name of person for which identification profile id should be created.

![personid](https://user-images.githubusercontent.com/31923904/41191128-7aee7b30-6c08-11e8-8a61-9e3dab403999.png)

Step 4 :open .env file in training folder and paste person ID created in step 3.

step 5:To add face images for person run the following file in the following path :Cognitive-Services-AI-Virtual-Trail-Blazer-Series/Node.js/Day 1/lab01.00-Face Identification/Training/
 
 
```
addfaces.js

```
![wer](https://user-images.githubusercontent.com/31923904/41191257-59ff1c98-6c0a-11e8-8390-edce99e9d196.png)

Step 6:To enable the API for face identification we need to run the training.js in the following path after adding face images path :Cognitive-Services-AI-Virtual-Trail-Blazer-Series/Node.js/Day 1/lab01.00-Face Identification/Training

```
training.js

```
![train](https://user-images.githubusercontent.com/31923904/41191415-a8fe1a72-6c0c-11e8-9521-e5dc1da18000.png)



Note :Test image is set to following path:"Cognitive-Services-AI-Virtual-Trail-Blazer-Series/Node.js/Day 1/lab01.00-Face Identification/Testing/images/"

![satya](https://user-images.githubusercontent.com/31923904/41190773-6012182c-6c02-11e8-9b2e-89b03a8a6ca4.jpg)


Step 7:To identify the image of the person run the following file in the following path : "Cognitive-Services-AI-Virtual-Trail-Blazer-Series\Node.js\Day 1\lab01.00-Face Identification\Testing".

```
testing.js

```

![sq](https://user-images.githubusercontent.com/31923904/41191614-e9c7fffc-6c0f-11e8-884b-6dc52efe5995.png)

 





  

