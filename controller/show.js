/**
 * Created by zhaojianwei on 2017/5/13.
 */
var handler = module.exports;

handler.GetPhotoDetail = function (req, res) {
    console.log("======>>4010:\t", req.params);
    var photos = [
        {id: 1, image: "http://oo3l8sz3b.bkt.clouddn.com/icon.png"},
        {id: 1, image: "http://oo3l8sz3b.bkt.clouddn.com/icon.png"},
        {id: 1, image: "http://oo3l8sz3b.bkt.clouddn.com/icon.png"}];
    res.render('show', { title: 'productList', images: photos});
};