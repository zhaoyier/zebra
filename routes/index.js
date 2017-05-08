var express = require('express');
var home = require("./../controller/home");
var about = require("./../controller/about");
var productA = require("./../controller/productA");
var productB = require("./../controller/productB");
var portfolio = require("./../controller/portfolio");
var temp = require("./../controller/temp");
var join = require("./../controller/join");

module.exports = function(app){
    app.get('/', home.home);
    app.get('/index', home.home);
    app.get('/portfolio', portfolio.portfolio);
    app.get("/about", about.about);
    app.get("/productA", productA.ProductAList);
    app.get("/productB", productB.ProductBList);
    app.get("/product/detail", productA.ProductDetail);
    app.get("/temp", temp.GetPhotos);
    app.get("/photo/:id", temp.GetPhotoDetail);

    app.post("/join", join.JoinUs);
    //app.file()
};
