var express = require('express');
var home = require("./../controller/home");
var about = require("./../controller/about");
var p1 = require("./../controller/p1");
var p2 = require("./../controller/p2");
var join = require("./../controller/join");
var temp = require("./../controller/temp");
var detail = require("./../controller/detail");

module.exports = function(app){
    app.get('/', home.home);
    app.get('/index', home.home);
    app.get("/about", about.about);
    app.get("/p1", p1.ProductList);
    app.get("/p2", p2.ProductList);
    app.all("/detail", detail.GetPhotoDetail);

    app.post("/join", join.JoinUs);
};
