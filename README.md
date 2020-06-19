# srinjoy.me

Source code for my personal website written using React and Next.js. It's been nearly 7 years since I wrote the first version of this website 🤯 It was one of my first programming projects and I've been tinkering with it ever since. 

### Rewrite
I recently rewrote this website from the group up to run on Next.js. My previous website was written when React was just starting to gain traction so it was starting to show its age. It was also suffering from several performance and security issues which were difficult to fix because of dependency hell. The previous version of this website is [here](https://github.com/srinjoym/srinjoy.me.v2).

### Flickr API
I wanted to experiment with static data fetching on Next.js so I added a new photos section on this rewrite. I query the Flickr API to get my photosets at https://srinjoy.me/photos and generate paths for each photoset at build time. Each photoset page (ex: https://srinjoy.me/photos/72157696821646084) also queries the Flickr API (again generated at compile time) to get all of the photos in its set.

Feel free to take inspiration from the design or code base. It's live at www.srinjoy.me

![Landing Page Screenshot](./docs/img/landing_screenshot.png?raw=true "Homepage")
