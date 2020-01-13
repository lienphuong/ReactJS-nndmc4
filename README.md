# ReactJS-Examples

This folder contains 7 simple examples using different ReactJS techniques.

- The first 4 examples are very much the same so that it's easier to understand the specific technique. Note that you can use the same project for these 4.
- The 5th example is a simple grid. You'll probably appreciate how simple it can be :)
- The 6th example is about drag and drop. We will be needing this for different projects, so this maybe a good starting point.
- The last example is about react animated tree

Note: 
- Currently the pictures are on https://nndmc4.clinicomp.com/Images. If you'd prefer working locally, please download the pictures and correct the path in src/BirdInit.js or src/createRowData.js so the pictures can be correctly located.

- Start script from Peng: mystart.sh
   
   #!/bin/bash

   export PORT=3333
   
   export BROWSER=none
   
   export SKIP_PREFLIGHT_CHECK=true

   yarn start
   
# Set up a project
1) Run the following command to create a new ReactJS project name my-app:
   npx create-react-app my-app

2) Copy example code from ReactJS-Examples to my-app (assuming that ReactJS-Examples and my-app are in the same level)
   For example: cp -r ReactJS-Examples/State/* my-app/.
   
3) Go to the newly created project:
   cd my-app
   
4) Add dependencies using yarn add
   For example: yarn add react-data-grid

5) Start the project
   ./mystart.sh

# 1 - ReactJS w/o hook (ReactJS-nndmc4/Class)
Use class as a regular way of creating ReactJS app.


# 2 - useState hook (ReactJS-nndmc4/State)
useState to manage state.

   
# 3 - useEffect hook (ReactJS-nndmc4/Effect)
useEffect to fetch data.


# 4 - useContext hook (ReactJS-nndmc4/Context)
useContext to toggle between lighter and darker themes via clicking on top left blinking button. 
  
   
# 5 - Grid (ReactJS-nndmc4/Grid)
Custom row grid rendering
   
Note: To see how USEFUL is faker.js, replace true with false in the following lines in BirdGrid.js:
const isBirdApp = true


# 6 - Drag and Drop (ReactJS-nndmc4/DnD)
In this example, there are 3 blocks a, b, and c:
- a is neither movable nor resizable. 
- b is movable and resizable but has min/max widths. 
- c is movable and resizable with no size limitation.


# 7 - Tree (ReactJS-nndmc4/Tree)
I adopted this example online (link below) and modified a little.
https://codesandbox.io/embed/rrw7mrknyp

