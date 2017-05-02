/**
 * Created by zhaojianwei on 2017/4/3.
 */
var handler = module.exports;

handler.portfolio = function (req, res) {
    res.render("portfolio", {title: "这里是简介"})
};