/**
 * Created by zhaojianwei on 2017/4/25.
 */
var handler = module.exports;

handler.GetPhotos = function(req, res) {
    console.log("======>>4001:\t");
    var photos = [
        {id: 1, img: "http://oo3l8sz3b.bkt.clouddn.com/icon.png"},
        {id: 2, img: "http://oo3l8sz3b.bkt.clouddn.com/icon.png"},
        {id: 3, img: "http://oo3l8sz3b.bkt.clouddn.com/icon.png"},
        {id: 4, img: "http://oo3l8sz3b.bkt.clouddn.com/icon.png"},
        {id: 5, img: "http://oo3l8sz3b.bkt.clouddn.com/icon.png"}];
    res.render('temp', { title: 'productList', images: photos});
};

handler.GetPhotoDetail = function (req, res) {
    console.log("======>>4002:\t", req.params);
    var photos = [
        {id: 1, img: "http://oo3l8sz3b.bkt.clouddn.com/icon.png"}];
    res.render('temp', { title: 'productList', images: photos});
};