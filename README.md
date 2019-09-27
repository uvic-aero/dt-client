# Desktop Client

The desktop client's purpose is to interface and visualize telemetry data obtained from
the microcontrollers onboard UAVs and UGVs

The desktop client is a React application built with [create-react-app](https://github.com/facebook/create-react-app). It is wrapped in an
[electron](https://electronjs.org/) app that allows the React app to be ran in a desktop application.

## Setup

1. `npm install` sets up the react+electron application
2. `npm start` will start up the React app on http://localhost:3000/
3. `npm run electron` will start up the electron app pointing at http://localhost:3000/
