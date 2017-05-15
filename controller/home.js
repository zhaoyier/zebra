/**
 * Created by zhaojianwei on 2017/3/16.
 */
var util = require("util");
var product = require("../dao/product");

var handler = module.exports;

handler.home = function (req, res, next) {
    var level = req.param("level")||1;
    product.QueryProductList(level, function (err, data) {
        console.log("===>>1010:\t", data);
        res.render("index", {title: "新缘湾", products: data, webpage: "home"});
    });
};