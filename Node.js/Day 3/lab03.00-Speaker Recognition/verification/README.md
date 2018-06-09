# Speaker Verification

In this lab you will analyze Speaker Recognition API where in Speaker Verification feature Use your voice for verification. The API can be used to power applications with an intelligent verification tool. If the speaker claims to be of a certain identity, use voice to verify this claim.

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

To check implementation of this lab please refer to the following path Cognitive-Services-AI-Virtual-Trail-Blazer-Series\Node.js\Day 3\lab03.00-Speaker Recognition.Implmentation consist of two parts:

* Training part
* Testing part

### To check implementation go through following steps :

step 1 :open .env file in the following path Cognitive-Services-AI-Virtual-Trail-Blazer-Series\Node.js\Day 3\lab03.00-Speaker Recognition\verification\Training and paste Speaker Recognition API subscription key.

Step 2 :In this step we will create verificationProfileId for user which is uniquely associated with the voice sample.To create verificationProfileId set path to Training foler in cmd and then run the following file:

```
                     createprofile.js

```
![sdd](https://user-images.githubusercontent.com/31923904/41189752-58c283f2-6bf0-11e8-8e6e-c464c414aa27.png)

Step 3:open .env file in training part and paste verificationprofileid generated from the step2 then save.In this step we do Enrollment for speaker verification is text-dependent, which means speaker need to choose a specific phrase to use in both enrollment and verification. [List of supported phrases can be found in Verification Phrase - List All Supported Verification Phrases.](https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5652c0801984551c3859634d)

The service requires at least 3 enrollments for each speaker before the profile can be used in verification scenarios. It is recommended to use the same device (mic) in both enrollment and verification.

To do enrollment set path to Training foler in cmd and then run the following file 3 times:

```
                     enrollment.js

```


![xc](https://user-images.githubusercontent.com/31923904/41189897-764411a0-6bf2-11e8-92e2-911769795816.png)

step 4:To verify the voice n input voice and phrase are compared against the enrollment's voice signature and phrase –in order to verify whether or not they are from the same person, and if they are saying the correct phrase.To verify set path to Testing folder in cmd and then run :

```
                     verification.js

```
![xc](https://user-images.githubusercontent.com/31923904/41190007-74316a00-6bf4-11e8-8cc0-b96dd8ea3998.png)

