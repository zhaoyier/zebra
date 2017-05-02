/**
 * Created by zhaojianwei on 2017/3/16.
 */
var pool = require("./pool");

var product = {
    InsertProduct: "INSERT INTO `product`(`nickname`, `username`, `age`, `level`, " +
    "`address`, `mobile`, `photo`, `status`, `create_time`, `update_time`) " +
    "VALUES(?, ?, ?, ?, ?, ?, ?, FROM_UNIXTIME(?), FROM_UNIXTIME(?))",
    QueryByID: "SELECT p.`nickname`, p.`age`, p.`level`, p.`mobile`, " +
    "p.`photo`, a.`province`, a.`city`, a.`county`, a.`street` " +
    "FROM `product` AS p, `address` AS a " +
    "WHERE 1=1 AND p.`address`=a.`id` AND p.`status`=0 AND p.`id`=?",
    QueryProducts: "SELECT p.`nickname`, p.`age`, p.`level`, p.`mobile`, " +
    "p.`photo`, a.`province`, a.`city`, a.`county`, a.`street` " +
    "FROM `product` AS p, `address` AS a " +
    "WHERE 1=1 AND p.`address`=a.`id` AND p.`status`=0 AND p.`level`=? ORDER BY `sales` DESC",
    UpdateSales: "UPDATE `product` SET `sales`=`sales`+1,`update_time`=FROM_UNIXTIME(?) " +
    "WHERE 1=1 AND `status`=0 AND `id`=?",
    UpdateStatus: "UPDATE `product` SET status=?,`update_time`=FROM_UNIXTIME(?) " +
    "WHERE 1=1 AND `id`=?"
};

module.exports = {
    QueryProductList: function (level, callback) {
        pool.getConnection(function (err, connection) {
            if (err != null) {
                return callback(err, null)
            } else {
                console.log("======>>001:\t", product.QueryProducts);
                connection.query(product.QueryProducts, [level], function (err, result) {
                    connection.release();
                    return callback(err, result)
                })
            }
        })
    },
    QueryByProductID: function (id, callback) {
        pool.getConnection(function (err, connection) {
            connection.query(product.QueryByID, [id], function (err, result) {
                if (err != null) {
                    return callback(err, null)
                } else {
                    connection.release();
                    return callback(err, result);
                }
            })
        })
    }
};

