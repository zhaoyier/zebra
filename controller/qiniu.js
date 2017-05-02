/**
 * Created by zhaojianwei on 2017/4/27.
 */
var qiniu = require("qiniu");
var moment = require("moment");
var handler = module.exports;

qiniu.conf.ACCESS_KEY = "OXgdURiiw5z2e13E7DCihHG3OiqClV9EQriYF04A";
qiniu.conf.SECRET_KEY = "m5w2CCaHmllV78-NWUf_EXrvqshbrqSsPimdip2s";

handler.GetUPToken = function (req, res) {
    var myUptoken = new qiniu.rs.PutPolicy("ziyuan");
    var token = myUptoken.token();
    moment.locale('en');
    var currentKey = moment(new Date()).format('YYYY-MM-DD--HH-mm-ss');
    res.header("Cache-Control", "max-age=0, private, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    if (token) {
        res.json({
            uptoken: token,
            sava_key :currentKey
        });
    }
};