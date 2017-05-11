var express = require('express');
var home = require("./../controller/home");
var about = require("./../controller/about");
var productA = require("./../controller/productA");
var productB = require("./../controller/productB");
var portfolio = require("./../controller/portfolio");
var seemore = require("./../controller/seemore");
var join = require("./../controller/join");
var temp = require("./../controller/temp");

module.exports = function(app){
    app.get('/', home.home);
    app.get('/index', home.home);
    app.get('/portfolio', portfolio.portfolio);
    app.get("/update", about.about);
    app.get("/productA", productA.ProductAList);
    app.get("/productB", productB.ProductBList);
    app.get("/product/detail", productA.ProductDetail);
    app.get("/seemore", seemore.GetPhotos);
    app.get("/photo/:id", seemore.GetPhotoDetail);
    app.get("/temp", temp.GetPhotoDetail);

    app.post("/join", join.JoinUs);
    //app.file()
};
