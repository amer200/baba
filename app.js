require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dbUrl = process.env.DB_URL;
const port = process.env.PORT;


app.use(express.static('public'));
app.set('view engine', 'ejs');


// routes
const mainRoutes = require('./routes/main');

app.use('/', mainRoutes);

mongoose.connect(dbUrl)
    .then(resu => {
        console.log('conected to db')
        app.listen(port, () => {
            console.log(`app conected at port ${port}`)
        })
    })
    .catch(err => {
        console.log(err)
    })