const express = require("express");

const COUPON_CODES = ["123", "456", "789"];

// Instantiate the app
const app = express();

// Add static files middleware
app.use(express.static("public"));

// JSON body parser middleware
// app.use(express.json()); // I'm commenting this out because we don't need it for this example

// Middleware to extract the form data from the request body
app.use(
    express.urlencoded({
        extended: true,
        type: "application/x-www-form-urlencoded",
    })
);

// Begin listening for requests
app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
