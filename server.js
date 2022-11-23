const express = require("express");

// Instantiate the app
const app = express();

// Add static files middleware
app.use(express.static("public"));

// Body parser middleware
app.use(express.json());

// Middleware to extract the form data from the request body
app.use(express.urlencoded({ extended: true }));

// Begin listening for requests
app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
