var fs = require('fs');
const axios = require('axios');
const express = require('express'); // Importing express module 

const app = express(); // Creating an express object 

const port = 8080;  // Setting an port for this application 



// Starting server using listen function 
app.listen(port, function (err) {
    if (err) {
        console.log("Error while starting server");
    }
    else {
        console.log("Server has been started at " + port);
    }
})

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello, World!' });
});
app.get('/api/products', (req, res) => {
    let pathExist = fs.existsSync("../../Data/Products/Products.json");
    let productsResponse = [];
    if (pathExist) {
        // if file exists
        productsResponse = JSON.parse(fs.readFileSync("../../Data/Products/Products.json"));
        res.json(productsResponse);
    }
    else {
        axios.get('https://api.restful-api.dev/objects')
            .then(function (response) {
                // handle success
                if(response.status === 200)
                productsResponse = response.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
                res.json(productsResponse);
            });
    }
});
