/**
 * Created by zhaojianwei on 2017/3/18.
 */
var pool = require("./pool");

var Sale = {
    Insert: "INSERT INTO `sale`(`product_id`, `price`, `mobile`, `address`, `status`, `create_time`, `update_time`) " +
    "VALUES(?, ?, ?, ?, ?, FROM_UNIXTIME(?), FROM_UNIXTIME(?))",
    Query: "SELECT `id`, `product_id`, `price`, `mobile`, `address`, `status`, `create_time` " +
    "FROM `sale` " +
    "WHERE 1=1 AND `product_id`=? ORDER BY `create_time` DESC",
    QueryByStatus: "",

};

module.exports = {
    AddSale : function (data, callback) {
        pool.getConnection(function (err, connection) {
            if (err != null) {
                return callback(err, null)
            } else {
                connection.query(Sale.Insert, [data.productID, data.price, data.mobile,
                    data.address, data,status, data.createTime, data.updateTime],
                    function (err, result) {
                    connection.release();
                    return callback(err, result)
                })
            }
        })
    },
    QuerySaleByID: function (id, callback) {
        pool.getConnection(function (err, connection) {
            if (err != null) {
                return callback(err, null)
            } else {

                connection.query(Sale.Query, [id], function (err, result) {
                        connection.release();
                        return callback(err, result)
                    })
            }
        })
    }
};