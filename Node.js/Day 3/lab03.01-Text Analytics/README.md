# Text Analytics 

In this lab you will analyze Text Analytics API which is a cloud-based service that provides advanced natural language processing over raw text, and includes four main functions: sentiment analysis, key phrase extraction, language detection, and entity linking.

Note:Please refer the following link for more information[Text Analytics API](https://azure.microsoft.com/en-in/services/cognitive-services/text-analytics/).

### Prerequisites
The following software environment is needed for running this API :

```
1.Node.js
```

### Collecting the keys

Over the course of this lab, we will collect various keys. It is recommended that you save all of them in a text file, so you can easily access them throughout the workshop.keys:

```
-Text Analytics API subscription key
```


### Implementation

To check implementation of this lab please refer to the following file in this path Cognitive-Services-AI-Virtual-Trail-Blazer-Series\Node.js\Day 3\lab03.00 Text Analytics:

```
                             textanalytics.js
```

### Check implementation through following steps

1.open .env file in the lab03.00 Text Analytics folder then paste Text Analytics API subscription key and language code (please refer following link for language code:[Language Code](https://docs.microsoft.com/en-in/azure/cognitive-services/text-analytics/text-analytics-supported-languages))   


2.Open command prompt (cmd) and set path to lab03.00 Text Analytics folder then run textanalytics.js file using command below:
```
                               node textanalytics.js
```
3.On the command prompt give the text which you would like to analyze.The following screen shows the result of text Analytics API for english text.  

![textanalytics](https://user-images.githubusercontent.com/31923904/41188060-7ba8aba0-6bd5-11e8-9c13-49e8f64ab3f1.png)




