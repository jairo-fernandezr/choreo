const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

// Read payloads from the JSON file
const payloads = JSON.parse(fs.readFileSync('payloads.json', 'utf8'));

// Use the cors middleware to allow requests from a specific origin
/*
app.use(cors({
    origin: 'http://localhost:3000' // Replace with your React app's domain
}));
*/
app.use(cors());

// Define a route for the API
app.get('/track/:trackingNumber', (req, res) => {
    const trackingNumber = req.params.trackingNumber;
    // Check if payload exists for the tracking number
    if (payloads.hasOwnProperty(trackingNumber)) {
    	console.log(trackingNumber);
    	console.log(payloads[trackingNumber]);
        // Return the corresponding payload as JSON
        res.json(payloads[trackingNumber]);
    } else {
        // If payload doesn't exist, return a 404 Not Found error
        //res.status(404).json({ error: 'Tracking number not found' });
        res.status(404).json({error: 'Invalid tracking number!', status: 'Not Found'});
        }
});

// Specify the port to listen on
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

