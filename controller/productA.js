/**
 * Created by zhaojianwei on 2017/3/16.
 */

var hanndler = module.exports

hanndler.ProductAList = function(req, res) {
    console.log("======>>3001:\t");
    res.render('productA', { title: 'productList'});
};

hanndler.ProductDetail = function (req, res) {
    var productId = req.param("productId");
    res.render('index', { title: 'productDetail'+productId });
};