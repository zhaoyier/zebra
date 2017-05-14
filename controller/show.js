/**
 * Created by zhaojianwei on 2017/5/13.
 */
var handler = module.exports;

handler.GetPhotoDetail = function (req, res) {
    console.log("======>>4010:\t", req.params);
    var photos = [
        {id: 1, image: "http://oo3l8sz3b.bkt.clouddn.com/0001.jpeg"},
        {id: 1, image: "http://oo3l8sz3b.bkt.clouddn.com/0001.jpeg"},
        {id: 1, image: "http://oo3l8sz3b.bkt.clouddn.com/0001.jpeg"},
        {id: 1, image: "http://oo3l8sz3b.bkt.clouddn.com/0001.jpeg"},
        {id: 1, image: "http://oo3l8sz3b.bkt.clouddn.com/0001.jpeg"}];
    res.render('show', { title: 'productList', images: photos});
};