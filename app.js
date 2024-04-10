require('dotenv').config();

const express = require("express");
const expressLayouts = require('express-ejs-layouts');

const connectDB = require('./server/config/db');
const session = require('express-session');
const passport = require("passport");
const MongoStore = require('connect-mongo');

const app= express();
const port = 5000 || process.env.PORT;

app.use(session({
    secret: 'keyboard pussy',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI
    }),
    cookie: {maxAge: new Date (Date.now() + 3600000)}
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//connect to the database
connectDB();

//static files
app.use(express.static('public'));

//templating engine
app.use(expressLayouts);
app.set("layout", './layouts/main');
app.set('view engine', 'ejs');

//routes
app.use('/', require('./server/routes/index'));
app.use('/', require('./server/routes/auth'));
app.use('/', require('./server/routes/dashboard'));


//Handle 404
app.get('*', function(req, res) {
    //res.status(404).send("404 Page Not Found!")
    res.status(404).render("404")
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});
