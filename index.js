const express = require('express');     // using "common js modules"
// import express from 'express'           // using ES2015 modules (node does not support)

const app = express();                  // create app object

// route handler for get requests to '/'
// req = request
// res = response
app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});

// instruct node to listen on port
app.listen(5000);