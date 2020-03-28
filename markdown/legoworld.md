### Development Process

Since this project spanned the entire semester, I decided to split it up into three stages in the beginning.
Each stage built on top of the previous and helped me keep track of my progress. This is a quick summary of my work on the project,
a longer blog post with more details about this project will be on [Medium]() soon.

#### Stages 1 & 2 - 2D Feature Matching

The first stage of this project was based on recognizing key points on an object so that the app could
reliably detect the position of the Lego set. I experimented with several key point extraction methods using the OpenCV library
such as the Scale Invariant Feature Transform (SIFT).

{{<img src={require('../../../../img/london_sift.jpg')}/>}}
*Keypoints on a Lego Model*

{{<br/>}}

I quickly realized that detecting SIFT features on each frame was not an ideal solution as the framerate had dropped to around 5 FPS (running on my Macbook Pro). After researching other key point descriptors, I settled on using Oriented Fast and Rotated Brief (ORB) Feature Points which is a much more computationally efficient binary descriptor. This led to a 2x framerate improvement! 🚀

#### Stage 3 - 3D Augmented Reality

The final stage of this project was taking the things learned from Stages 1 and 2 to implement a 3D Augmented Reality iOS app. This was my first major foray into the world of iOS development so I was excited to get more comfortable with Swift and ARKit throughout the semester!

{{<br/>}}

I first needed 3D models of the Lego sets so I could overlay them as the user built each layer in the app. Thankfully, the [Eurobricks](www.eurobricks.com) community has an excellent archive of Lego Digital Designer models for most major Lego sets. From there, I just had to do some tinkering to split each model into different steps for the user to follow, and then export each into the COLLADA file format.

{{<img src={require('../../../../img/legoworld_cad_models.png')}/>}}
*Models of the Lego Architecture Sets I used*

{{<br/>}}

This app is built on Apple's ARKit Library which provides several utilities for object detection and tracking. To adds support for a new Lego set to the app, the first step is to scan 3D point clouds of each stage of the model. Unlike key point detection in Stage 1, I recorded key points on the object from multiple viewpoints so it could be recognized from any angle.

{{<br />}}

After initial testing, I decided to scan two point clouds for each step in the building process. The first scan consisted of the unique key points on the new pieces in this step. The second scan consisted of all of the key points of the set at this current step. With this approach, I was able to accurately detect which step the user was on (based on the first scan) and then track the position of the set using the second scan.

{{<br />}}

After the app detects which step the user is on, it loads the COLLADA file for the next step and anchors to the correct place on the physical model. This allows the user to clearly see where the next pieces should go instead of having to guess based on the manual.

{{<img src={require('../../../../img/legoworld_anchor_demo.png')}/>}}

*Left: 3D Model of Big Ben anchored, Right: Physical Big Ben Set*

{{<br />}}
### Awards
* **Ram's Horn Best Project Award** - UT Austin EE371R, Digital Image Processing

