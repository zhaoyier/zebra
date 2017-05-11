/**
 * Created by zhaojianwei on 2017/3/19.
 */
var handler = module.exports;

handler.about = function (req, res) {
    res.render("update", {title: "这里上传图片"})
};