# -*- coding: utf-8 -*-
"""
Created on Tue Jun 12 02:48:51 2018

@author: Kevin
"""

# Replace <Subscription Key> with your valid subscription key.
subscription_key = "11390db6c3e3453f96e0b07de47113a9"
assert subscription_key

# You must use the same region in your REST call as you used to get your
# subscription keys. For example, if you got your subscription keys from
# westus, replace "westcentralus" in the URI below with "westus".
#
# Free trial subscription keys are generated in the westcentralus region.
# If you use a free trial subscription key, you shouldn't need to change
# this region.
vision_base_url = "https://westus.api.cognitive.microsoft.com/vision/v1.0/"

thumbnail_url  = vision_base_url + "generateThumbnail"

# Set image_url to the URL of an image that you want to analyze.
image_url = "https://upload.wikimedia.org/wikipedia/commons/9/94/Bloodhound_Puppy.jpg"

import requests
headers  = {'Ocp-Apim-Subscription-Key': subscription_key}
params   = {'width': '50', 'height': '50', 'smartCropping': 'true'}
data     = {'url': image_url}
response = requests.post(thumbnail_url, headers=headers, params=params, json=data)
response.raise_for_status()

# If you are using a Jupyter notebook, uncomment the following line.
#%matplotlib inline
from PIL import Image
from io import BytesIO
import matplotlib.pyplot as plt
thumbnail = Image.open(BytesIO(response.content))

# Display the thumbnail.
plt.imshow(thumbnail)
plt.axis("off")

# Verify the thumbnail size.
print("Thumbnail is {0}-by-{1}".format(*thumbnail.size))