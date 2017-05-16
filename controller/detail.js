/**
 * Created by zhaojianwei on 2017/5/13.
 */
var handler = module.exports;

handler.GetPhotoDetail = function (req, res) {
    if (req.method.toString() === "POST") {
        res.json({code: 200})
    } else {
        var photos = [
            {id: 1, image: "http://oo3l8sz3b.bkt.clouddn.com/0001.jpeg"},
            {id: 1, image: "http://oo3l8sz3b.bkt.clouddn.com/0001.jpeg"},
            {id: 1, image: "http://oo3l8sz3b.bkt.clouddn.com/0001.jpeg"},
            {id: 1, image: "http://oo3l8sz3b.bkt.clouddn.com/0001.jpeg"},
            {id: 1, image: "http://oo3l8sz3b.bkt.clouddn.com/0001.jpeg"}];
        res.render('detail', {
            title: '测试',
            webpage: "about",
            images: photos
        });
    }

};