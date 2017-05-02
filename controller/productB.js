/**
 * Created by zhaojianwei on 2017/4/15.
 */
/**
 * Created by zhaojianwei on 2017/3/16.
 */

var hanndler = module.exports

hanndler.ProductBList = function(req, res) {
    console.log("======>>3001:\t");
    res.render('productB', { title: 'productList'});
};

hanndler.ProductDetail = function (req, res) {
    var productId = req.param("productId");
    res.render('index', { title: 'productDetail'+productId });
};