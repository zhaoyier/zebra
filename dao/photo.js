/**
 * Created by zhaojianwei on 2017/3/18.
 */
var pool = require("./pool");

var photo = {
    UploadImg : "INSERT INTO `photo`(`product_id`, `img`, `status`, `create_time`, `update_time`) " +
    "VALUES(?, ?, ?, FROM_UNIXTIME(?), FROM_UNIXTIME(?))",
    UpdateStatus: "UPDATE `photo` SET `status`=?, `update_time`=FROM_UNIXTIME(?) " +
    "WHERE 1=1 AND id=?",
    QueryPhotos: "SELECT `img`, `evaluate` " +
    "FROM `photo` " +
    "WHERE 1=1 AND `status`=0 AND `product_id`=? ORDER BY evaluate DESC"
};

module.exports = {
    QueryPhotoByID: function(id, callback) {
        pool.getConnection(function (err, connection) {
            if (err != null) {
                return callback(err, null)
            } else {
                connection.query(photo.QueryPhotos, [id], function (err, result) {
                    connection.release();
                    return callback(err, result)
                })
            }
        })
    },
    UploadImage: function (callback) {
        pool.getConnection(function (err, connection) {
            if (err != null) {
                return callback(err, null)
            } else {
                connection.update(photo.UploadImg, [], function (err, result) {
                    connection.release();
                    return callback(err, result)
                })
            }
        })
    },
};