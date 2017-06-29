var express = require("express"),
    mongoose = require("mongoose"),
    path = require("path"),
    bodyParser = require("body-parser"),
    hbs = require("hbs"),
    passport = require("passport"),
    auth = require("./app/auth/passport-local"),
    bcrypt = require("bcrypt-nodejs"),
    User = require("./app/models/userModel"),
    Post = require("./app/models/blogpostModel"),
    session = require("express-session"),
    methodOverride = require("method-override"),
    route = require("./app/routes/routes"),
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/static", express.static(path.join(__dirname, "app/client")));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "app/views"))

app.use(session({
    secret: 'issaSecret',
    resave: true, 
    saveUninitialized: true
}));

app.use(methodOverride('_method'));

app.use(passport.initialize());
app.use(passport.session());

auth(passport);
route(app, passport);

//localAuth(passport);

app.listen(8080);
//routes(app);