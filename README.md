# ReactJS-Examples

This folder contains 6 simple examples using different ReactJS techniques.

- The first 4 examples are very much the same so that it's easier to understand the specific technique. Note that you can use the same project for these 4.

- The 5th example is a simple grid. You'll probably appreciate how simple it can be :)

- The last example is about drag and drop. We will be needing this for different projects, so this maybe a good starting point.

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

4) Start the project

   ./mystart.sh

# 1 - ReactJS w/o hook
Use class as a regular way of creating ReactJS app.
This directory (Class) contains files that are needed to make use of context, but it is not complete and initial set up is required.


# 2 - useState hook
useState to manage state.
This directory (State) contains files that are needed to make use of context, but it is not complete and initial set up is required.

   
# 3 - useEffect hook
useEffect to fetch data.
This directory (Effect) contains files that are needed to make use of context, but it is not complete and initial set up is required.


# 4 - useContext hook
useContext to toggle between lighter and darker themes via clicking on top left blinking button. 
This directory (Context) contains files that are needed to make use of context, but it is not complete and initial set up is required.
   
   
# 5 - Grid
Custom row grid rendering
This directory (Grid) contains files that are needed to create a simple grid, but it is not complete and initial set up is required.
   
Note: To see how USEFUL is faker.js, replace true with false in the following lines in BirdGrid.js:

   const isBirdApp = true

   
# 6 - Drag and Drop
In this example, there are 3 blocks a, b, and c:
- a is neither movable nor resizable. 
- b is movable and resizable but has min/max widths. 
- c is movable and resizable with no size limitation.

This directory (DnD) contains files that are needed to create a simple drag and drop, but it is not complete and initial set up is required.
