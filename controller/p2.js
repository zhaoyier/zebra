/**
 * Created by zhaojianwei on 2017/4/15.
 */
var handler = module.exports;
var product = require("../dao/product");

handler.ProductList = function(req, res) {
    var level = req.param("level")||2;
    product.QueryProductList(level, function (err, data) {
        res.render("p1", {products: data});
    });
};

// handler.ProductDetail = function (req, res) {
//     var productId = req.param("productId");
//     res.render('index', { title: 'productDetail'+productId });
// };