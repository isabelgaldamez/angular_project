const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
app.use(express.json());

app.use(express.static( __dirname + '/public/dist/public' ));

require('./server/config/mongoose.js');
require('./server/config/routes')(app);

// this route will be triggered if any of the routes above did not match
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8080, () => console.log('Listening to port 8080'));
