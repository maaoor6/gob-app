const PORT = 4000 
const express = require('express');
const app = express();
const config = require('./config/db')//mongodb
const bodyParser = require('body-parser');
const gob = require('./routes/gobs.route'); 
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
mongoose.connect(config.mongourl, {useNewUrlParser: true},(err)=>{
    if(err){throw err;  }
    console.log("MongoDB database connection established successfully")
})


app.use('/gobs', gob);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});