var express = require("express"),
    mongoose = require("mongoose"),
    path = require("path"),
    bodyParser = require("body-parser"),
    hbs = require("hbs"),
    passport = require("passport"),
    session = require("express-session");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/static", path.join(__dirname, "BillDeBlagio/client"));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "app/views"))

app.use(session({
    secret: 'issaSecret',
    resave: true, 
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

localAuth(passport);