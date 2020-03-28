### Design Highlights

#### Robot Arm
I first designed a simple and modular robot arm to mount the soft robotic gripper on. I designed the arm to have 4 degrees of freedom (DOF) and to have a reach of around 10 inches. After completing the CAD model, I 3D Printed all of the parts in-house. I used servos to control the arm's position, and an Arduino microcontroller to control the position of the arm. Finally, I also attached a webcam to the top of the arm so I could automatically detect and pick up objects.

{{<br />}}
In early testing, I discovered that the servos were not powerful enough to hold the gripper and motors up at all times. I attached several bungee cords from the base throughout the arm to counterbalance on the arm. This significantly reduced the load on the servos and made it possible to control. If I were to do this again, I would use stronger motors in the design and integrate a counterbalancing mechanism from the start for more precise control.

{{ <br />}}

#### Soft Gripper

One of the best resources for getting started with soft robot design is the Harvard [soft robotics toolkit](https://softroboticstoolkit.com). After reviewing the designs in the toolkit, I designed some prototype molds using Autodesk Inventor. I also used Abaqus which is Finite Element Analysis program, to determine what the gripper would do when actuated. I finally settled on a four finger design that was very effective at grabbing objects.

{{<br />}}

I decided to use [Ecoflex](https://www.smooth-on.com/product-line/ecoflex/) a super-soft silicone rubber for the gripper's material. After I 3D printed the molds, I poured EcoFlex into them and let them cure in heat. After discovering that putting plastic in an oven is a bad idea 🤦🏽‍, I decided to just let them sit out in the sun. The final product was a silicone gripper with ridges for air to fill so that the finger could fold and grab things. I used a pneumatic compressor and a pressure sensor to maintain a constant grip on the objects.

{{<img src={require('../../../../img/gripper.png')} />}}