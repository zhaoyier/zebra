/**
 * Created by zhaojianwei on 2017/3/16.
 */

var mysql = require("mysql");
var $conf = require("../conf/db");

module.exports = mysql.createPool($conf.mysql);

//module.exports = pool;