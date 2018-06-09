# Speaker Identification

In this lab you will analyze Speaker Recognition where in Speaker Identification API Identify who is speaking. The API can be used to determine the identity of an unknown speaker. Input audio of the unknown speaker is paired against a group of selected speakers and in the case there is a match found, the speaker’s identity is returned.

Note:Please refer the following link for more information[Speaker Recognition API](https://docs.microsoft.com/en-in/azure/cognitive-services/speaker-recognition/home).

### Prerequisites
The following software environment is needed for running this API :
```
1.Node.js
```

### Collecting the keys

Over the course of this lab, we will collect various keys. It is recommended that you save all of them in a text file, so you can easily access them throughout the workshop.keys:

```
-Speaker Recognition API subscription key
```


### Implementation

To check implementation of this lab please refer to the following path 
Cognitive-Services-AI-Virtual-Trail-Blazer-Series\Node.js\Day 3\lab03.00-Speaker Recognition\Identification.Implementation consist of two parts:

* Training part
* Testing part

### To check implementation go through following steps :

step 1 :open .env file in the following path Cognitive-Services-AI-Virtual-Trail-Blazer-Series\Node.js\Day 3\lab03.00-Speaker Recognition\Identification\Training and paste Speaker Recognition API subscription key.

Note :Voice sample set to the following path :Cognitive-Services-AI-Virtual-Trail-Blazer-Series\Node.js\Day 3\lab03.00-Speaker Recognition\Identification\Training\voice

step 2 :To train API for voice sample set path to the Cognitive-Services-AI-Virtual-Trail-Blazer-Series\Node.js\Day 3\lab03.00-Speaker Recognition\Identification\Training in cmd then run training.js

 ```
training.js

```
![sdf](https://user-images.githubusercontent.com/31923904/41190244-a1b985f8-6bf8-11e8-821a-8293ea2e5b34.png)


step 3 :open .env in this path Cognitive-Services-AI-Virtual-Trail-Blazer-Series\Node.js\Day 3\lab03.00-Speaker Recognition\Identification\Testing and paste the identificationprofileid obtained through the step 2.

Note :Voice sample set to the following path : Cognitive-Services-AI-Virtual-Trail-Blazer-Series\Node.js\Day 3\lab03.00-Speaker Recognition\Identification\Testing\voice

step 4 :To test voice sample against identificationprofileid run following file in the following path "Cognitive-Services-AI-Virtual-Trail-Blazer-Series\Node.js\Day 3\lab03.00-Speaker Recognition\Identification" Testing in cmd :

```
testing.js

```
![xcc](https://user-images.githubusercontent.com/31923904/41190410-8bb260a6-6bfb-11e8-8d65-5d12f1107b55.png)



 
