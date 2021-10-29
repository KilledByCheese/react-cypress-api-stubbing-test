# Getting startet  
 
 This Project is a simple react application to demo api stubbing with cypress.

### Running
  
After pulling navigate into the folder and run ```npm install``` to install the necessary ```node_modules```.
Start the Application with ```npm start``` and open [http://localhost:3000](http://localhost:3000) to view it in the browser.  
  
The application shows a single Button. When you press the Button an API-Call is triggered with ```axios``` to request 2 Users.  
The names of the Users are displayed in a simple list.  
  
You can find the ```cypress``` Tests under ```cypress/integration/api-mock-test/apiStubbing.spec.js```.  
To run Cypress execute ```npm run cypress```.  
  
  
Happy Coding!