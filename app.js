require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const dbUrl = process.env.DB_URL;
const port = process.env.PORT;

const store = new MongoDBStore({
    uri: dbUrl,
    collection: 'mySessions'
});
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: store,
}))
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))

// routes
const mainRoutes = require('./routes/main');
const adminRoutes = require('./routes/admin');

app.use('/admin', adminRoutes);
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