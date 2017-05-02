/**
 * Created by zhaojianwei on 2017/3/16.
 */
var util = require("util");
var product = require("../dao/product");

var handler = module.exports;

handler.home = function (req, res, next) {
    var products = [];
    var level = req.param("level")||1;
    var result = product.QueryProductList(level, function (err, data) {
        console.log("========>.2011:\t", data.length, util.isArray(data));
        if (util.isArray(data) == true) {
            var start=0, end=start+4;
            while (data[start]!=null) {
                products.push(data.slice(start, end));
                //console.log("========>.2013:\t", start, end, data.slice(start, end));
                start += 4; end = start +4

            }

        }
        console.log("========>.2013:\t", products);
        res.render("index", {title: "home", data: products})
    });

    //product.query(req, res, next)
};