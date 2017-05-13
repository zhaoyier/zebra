var express = require('express');
var home = require("./../controller/home");
var about = require("./../controller/about");
var p1 = require("./../controller/p1");
var p2 = require("./../controller/p2");
var seemore = require("./../controller/seemore");
var join = require("./../controller/join");
var temp = require("./../controller/temp");

module.exports = function(app){
    app.get('/', home.home);
    app.get('/index', home.home);
    app.get("/update", about.about);
    app.get("/p1", p1.ProductList);
    app.get("/p2", p2.ProductList);
    app.get("/seemore", seemore.GetPhotos);
    app.get("/photo/:id", seemore.GetPhotoDetail);
    app.get("/temp", temp.GetPhotoDetail);

    app.post("/join", join.JoinUs);
    //app.file()
};
