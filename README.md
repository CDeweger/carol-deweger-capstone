# Donation Hub

It is a communication app for non-profits and donors. It is a full-stack project.
Therefore, both the node modules in the server folder and client folder need to be installed before running the app.
Data is kept as json files on the server side.
Image data is stored in Cloudinary.
Backend server is using expressJS and has various end points to send, edit, delete, add new posts.
Frontend is setup with React using create-react-app. Routing is done with the react-router-dom.
environment variables are not uploaded to github but a sample .env file is present.

## Available Scripts

### `npm start`

In the server directory, this script launches the server.
nodemon is installed as a dev dependecy to help restarting the server.
This script activates nodemon to watch changes on the server.js in the server side.

### `npm start`

In client directory, you can run this script to run the app in the development mode.
The page will reload when you make changes.
You may also see any lint errors in the console.

## Search functionality

All organizations page has a search bar that queries organization on the backend and sends the filtered data to the frontend.

A new API call is made to the server with each keystroke.This search also updates the url and the results persist. That way, the filtered list can be shared.
