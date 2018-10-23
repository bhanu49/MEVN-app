const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//connect to mongodb

mongoose.connect("mongodb://127.0.0.1:27017/edifyMe");
mongoose.Promise = global.Promise;

app.use(bodyparser.json());

app.use('/api',require('./routes/api'));

//error handling
app.use(function (err,req,res,next) { 
    res.status(422).send({
        error: err.message
    });
 });

app.listen(process.env.port || 8081, function(){
    console.log('listening to port 8081');
});