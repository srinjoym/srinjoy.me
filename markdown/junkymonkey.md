### The Game

RECYCLE RUSH is a recycling-themed game played by two Alliances of three robots each. Robots score points by stacking totes on scoring platforms, capping those stacks with recycling containers, and properly disposing of pool noodles, representing litter. In keeping with the recycling theme of the game, all game pieces used are reusable or recyclable by teams in their home locations or by FIRST® at the end of the season

{{<img src={require('../../../../img/rrfield.png')} />}}
*Render of Recycle Rush Game Field*

{{<br/>}}

### My Role

I was in charge of the elevator subsystem on the robot, which consisted of the upper structure, lifting gearbox, and counterbalancing. Even though I had experimented with 3D Modeling in the past, this was my first time directing the design for a full system. Before the season started, I went to the Advanced Design Lectures held by our team mentors to learn about the math, physics and design behind our robots. I also held some workshops of my own, teaching our rookie members about the electronics subsystem and more advanced tools such as an oscilloscope.

{{ <img src={require('../../../../img/oscilloscope.jpg')} /> }}
*Teaching members about an oscilloscope during an Advanced Design Lecture*

{{<br />}}

### Gearbox Design

#### Flexibility

I had two primary goals when designing the lifting gearbox: reliability and speed. For reliability, I decided to use a worm gear stage to prevent the gearbox from backdriving under load, so we didn't have to constantly power the motors.

{{<br />}}

For speed, I designed the gearbox with the ability to switch gear combinations after we built it so I could vary the speed. I was able to do this by adding an additional spur gear reduction between the motor and worm shaft. The two input gears from the motors meshed with a central spur gear before feeding into the centeral worm gear. The ratio between the input and central gear could be changed as long as the sum of the number of teeth on the gears was the same. This allowed me to increased the speed up to 4 ft/s.

{{ <img src={require('../../../../img/worm-flexible.png')} /> }}
*Different Gear Combinations on the Lifting Gearbox Spur Gears*

{{<br/>}}

#### Counterbalancing

Because of FRC motor limitations, the gearbox was not able to output enough power to lift up a stack of 6 totes and a container by itself. To do this, I decided to use a Negator Spring Motor Assembly from SDP-SI that had a spring torque rating of 15.5 lb-in.

{{<br />}}

I wanted the spring to provide around 30 lbs of additional lifting force so the gearbox could lift a full load of 6 containers. To increase the force of the spring motor, I attached it directly to a spool on the gearbox shaft. This allowed me to vary the size of the spool to increase or decrease the force from the Spring Motor.

{{ <img src={require('../../../../img/junkymonkey_gearbox_counterbalance.png')} /> }}
*The Spring Motor (to the right) is attached to a spool on the main gearbox*

{{<br />}}
### Awards
* Orlando Regional - Quarter-Finalists
* Silicon Valley Regional - Semi-Finalists

{{ <img src={require('../../../../img/svr2015team.jpg')} /> }}