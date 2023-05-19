'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here
app.get('/math/circle/:r', function(req, res) {
    let radius = req.params.r;
    let area = Math.PI * radius * radius;
    let circumference = 2 * Math.PI * radius;
    res.json({ "area": area, "circumference": circumference });
});

// define endpoint for exercise 2 here
app.get('/hello/name', function(req, res) {
    let firstName = req.query.first;
    let lastName = req.query.last;

    if (!firstName || !lastName) {
        res.status(400).send('Missing Required GET parameters: first, last');
    } else {
        res.send(`Hello ${firstName} ${lastName}`);
    }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT);
