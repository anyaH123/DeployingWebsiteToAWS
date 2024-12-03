// server.js File 
const express = require('express'); // Importing express module 
  
const app = express(); // Creating an express object 
// app.use(bodyParser.json());
  
const port = 8080;  // Setting an port for this application 
  
  
// Starting server using listen function 
app.listen(port, function (err) { 
   if(err){ 
       console.log("Error while starting server"); 
   } 
   else{ 
       console.log("Server has been started at "+port); 
   } 
}) 

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello, World!' });
});