## Timeline 
An infinite Scroll Loading Implmentation with ReactJS.

## Technologies Used
- ReactJS
- React Query 
- Styled Components 
- create-react-app boilerplate 
- ExpressJS 

## Setup 

- Latest versions of NodeJS and npm are required 

The application is composed of 2 components: server and client, you need to install dependencies for both:
using the command line:
- cd into `client` folder then run the command: `npm install`
- cd into `server` folder then run the command: `npm install`

## Run the application
From the command line cd into `server` folder and run the command `npm run dev`, this will run both the client and the server concurrently.

For testing purposes you may want to run the client and the server separately, to do that run the commands `npm start` and `npm run server` from within the client and the server folders in order. 

The client has other scripts that you can run including `test` all are explained on the README file inside the client folder 

## Responsiveness 
Application have been tested on Desktop, macbook air laptop, iPad Air 4 tablet, and Samsung Galaxy S7 phone, it works as expected in all of them.   

## Notes
- The JSON data provided have only 5 elements which are not enough to work with, I have duplicated them and created a new JSON file with more entries 
- Each entrie on the JSON file doesn't have a unique id which is weired, i needed it to specify a key for each post component to avoid unnecessary re-renders, I have used post creation time instead, which is not ideal but that's all we have 
- As the representation doesn't matter much on this test, I have eliminated some elements and focused only on those that align with the requirements.