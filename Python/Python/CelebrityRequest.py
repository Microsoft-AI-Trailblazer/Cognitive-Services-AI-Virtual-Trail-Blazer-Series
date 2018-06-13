# -*- coding: utf-8 -*-
"""
Created on Tue Jun 12 02:46:20 2018

@author: Kevin
"""

# Replace <Subscription Key> with your valid subscription key.
subscription_key = "11390db6c3e3453f96e0b07de47113a9"
assert subscription_key
vision_base_url = "https://westus.api.cognitive.microsoft.com/vision/v1.0/"

celebrity_analyze_url = vision_base_url + "models/celebrities/analyze"

image_url = "https://upload.wikimedia.org/wikipedia/commons/d/d9/" + \
    "Bill_gates_portrait.jpg"

import requests
headers  = {'Ocp-Apim-Subscription-Key': subscription_key}
params   = {'model': 'celebrities'}
data     = {'url': image_url}
response = requests.post(
    celebrity_analyze_url, headers=headers, params=params, json=data)
response.raise_for_status()

analysis = response.json()
assert analysis["result"]["celebrities"] is not []
print(analysis)

celebrity_name = analysis["result"]["celebrities"][0]["name"].capitalize()

from PIL import Image
from io import BytesIO
import matplotlib.pyplot as plt
image = Image.open(BytesIO(requests.get(image_url).content))
plt.imshow(image)
plt.axis("off")
_ = plt.title(celebrity_name, size="x-large", y=-0.1)