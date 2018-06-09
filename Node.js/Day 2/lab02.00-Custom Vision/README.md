# Custom Vision

The Custom Vision Service is a Microsoft Cognitive Service that lets you build custom image classifiers. It makes it easy and fast to build, deploy, and improve an image classifier. The Custom Vision Service provides a REST API and a web interface to upload your images and train the classifier.

Note:Please refer the following link for more information [Custom Vision](https://azure.microsoft.com/en-in/services/cognitive-services/custom-vision-service/).

### Prerequisites

The following software environment is needed for running this API :
```
1.Node.js
```

### Collecting the keys

Over the course of this lab, we will collect various keys. It is recommended that you save all of them in a text file, so you can easily access them throughout the workshop.keys:


* Custom Vision Training key
* Custom Vision Prediction Key



### Implementation

To check implementation refer files in the following path :Cognitive-Services-AI-Virtual-Trail-Blazer-Series/Node.js/Day 2/lab02.00-Custom Vision/

The implementation is divided into two parts :

* Training part
* Testing part


### To check implementation go through following steps :

Note :The implemention is given for Two cases :Flower and pizza.

Note :open .env in both train and test folder in each case flower and pizza and paste Custom Vision Training key and Custom Vision Prediction Key.

Step 1 :In this step we will create a project for classifier.To create project run the following file in the following path :"Cognitive-Services-AI-Virtual-Trail-Blazer-Series/Node.js/Day 2/lab02.00-Custom Vision/Pizza/train/" on cmd :

```
createproject.js

```
Note:open .env in train folder and paste project id which you got after running the file on the command prompt.

Step 2 :In this step we will create a tag for identifying images.To create tag run the following file in the following path :"Cognitive-Services-AI-Virtual-Trail-Blazer-Series/Node.js/Day 2/lab02.00-Custom Vision/Pizza/train/" on the cmd:
```
createtag.js

```
Note:open .env in train folder and paste Tag id which you got after running the file on the command prompt.

step 3 :In this step we wll will upload images with respect to tag which we created.To upload an image run the following file in the following path :"Cognitive-Services-AI-Virtual-Trail-Blazer-Series/Node.js/Day 2/lab02.00-Custom Vision/Pizza/train/" on the cmd:

```
createimage.js

```
step 4 :In this step we will train API after uploading all images for tags.To train API run the followng file in the following path :"Cognitive-Services-AI-Virtual-Trail-Blazer-Series/Node.js/Day 2/lab02.00-Custom Vision/Pizza/train/" on the cmd:

```
train.js

```
Step 5:In this step we will test the classifier for its accurancy.To test classifier run the following file in the following path :"Cognitive-Services-AI-Virtual-Trail-Blazer-Series/Node.js/Day 2/lab02.00-Custom Vision/Pizza/test/"on the cmd:
```
quicktest.js

```
