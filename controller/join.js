/**
 * Created by zhaojianwei on 2017/4/25.
 */
var hanndler = module.exports;

hanndler.JoinUs = function (req, res) {
    console.log("=====0090:\t", req.body);
    res.render("join", {title: "测试ajax"})
};