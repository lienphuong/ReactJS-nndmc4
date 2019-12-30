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

   npm start


# 1 - ReactJS w/o hook
Use class as a regular way of creating ReactJS app.
This directory (Class) contains files that are needed to make use of context, but it is not complete and initial set up is required.

How to set up:
1) Run the following command to create a new ReactJS project name my-usestate:

   npx create-react-app my-app

2) Copy code from Grid to my-app (assuming that ReactJS-Examples and my-usestate are in the same level)

   cp -r ReactJS-Examples/State/* my-app/.
   
3) Go to the newly created project:

   cd my-app

4) Start the project

   ./mystart.sh
   

# 2 - useState hook
useState to manage state.
This directory (State) contains files that are needed to make use of context, but it is not complete and initial set up is required.

How to set up:
1) Run the following command to create a new ReactJS project name my-usestate:

   npx create-react-app my-usestate

2) Copy code from Grid to my-usestate (assuming that ReactJS-Examples and my-usestate are in the same level)

   cp -r ReactJS-Examples/State/* my-usestate/.
   
3) Go to the newly created project:

   cd my-usestate

4) Start the project

   ./mystart.sh
   
   
# 3 - useEffect hook
useEffect to fetch data.
This directory (Effect) contains files that are needed to make use of context, but it is not complete and initial set up is required.

How to set up:
1) Run the following command to create a new ReactJS project name my-useeffect:

   npx create-react-app my-useeffect

2) Copy code from Grid to my-useeffect (assuming that ReactJS-Examples and my-useeffect are in the same level)

   cp -r ReactJS-Examples/Effect/* my-useeffect/.
   
3) Go to the newly created project:

   cd my-useeffect

4) Start the project

   ./mystart.sh

# 4 - useContext hook
useContext to toggle between lighter and darker themes via clicking on top left blinking button. 
This directory (Context) contains files that are needed to make use of context, but it is not complete and initial set up is required.

How to set up:
1) Run the following command to create a new ReactJS project name my-usecontext:

   npx create-react-app my-usecontext

2) Copy code from Grid to my-usecontext (assuming that ReactJS-Examples and my-context are in the same level)

   cp -r ReactJS-Examples/Context/* my-usecontext/.
   
3) Go to the newly created project:

   cd my-usecontext

4) Start the project

   ./mystart.sh
   
   
# 5 - Grid
Custom row grid rendering
This directory (Grid) contains files that are needed to create a simple grid, but it is not complete and initial set up is required.

How to set up:
1) Run the following command to create a new ReactJS project name my-grid:

   npx create-react-app my-grid

2) Copy code from Grid to my-grid (assuming that ReactJS-Examples and my-grid are in the same level)

   cp -r ReactJS-Examples/Grid/* my-grid/.
   
3) Go to the newly created project:

   cd my-grid

4) Remove package-lock.json because we will be copying package.json from the package and will need to install again:

   rm package-lock.json
   
5) Install dependencies listed in package.json:

   npm install
   
6) Start the project

   ./mystart.sh
   
7) To see how USEFUL is faker.js, replace true with false in the following lines in BirdGrid.js:

   const isBirdApp = true

   
# 6 - Drag and Drop
In this example, there are 3 blocks a, b, and c:
- a is not resizable nor movable. 
- b is movable and resizable but has min/max widths. 
- c is movable and resizable.

This directory (DnD) contains files that are needed to create a simple grid, but it is not complete and initial set up is required.

How to set up:
1) Run the following command to create a new ReactJS project name my-dnd:

   npx create-react-app my-dnd

2) Copy code from DnD to my-dnd (assuming that ReactJS-Examples and my-dnd are in the same level)

   cp -r ReactJS-Examples/DnD/* my-dnd/.
   
3) Go to the newly created project:

   cd my-dnd
   
4) Remove package-lock.json because we will be copying package.json from the package and will need to install again:

   rm package-lock.json
   
5) Install dependencies listed in package.json:

   npm install
   
6) Start the project

   ./mystart.sh
