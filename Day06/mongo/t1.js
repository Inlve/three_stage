const mongo = require('mongodb');

let url = 'mongodb://localhost';
let db = 'test';

/**
 * 连接数据库
 * @returns {Promise}
 */
connection = () => new Promise((resolve, reject) => {
    mongo.MongoClient.connect(url, (error, result) => {
        error ? reject(error) : resolve(result);
        // console.log('数据库连接成功!');
    })
});

/**
 * 插入数据
 * @param dbName {String} (可选)数据库名
 * @param col {String} 集合名
 * @param data {Object || Array} 要插入的数据,可以为数组或者对象
 * @returns {Promise}
 */
const insert = ({dbName = db, col, data}) => new Promise(async (resolve, reject) => {
    function temp (error, result) {
        error ? reject(error) : resolve(result);
        console.log(`成功插入${result.insertedCount}条数据!`);
    }

    const client = await connection();
    if (Array.isArray(data)) {
        client.db(dbName).
            collection(col).
            insertMany(data, (error, result) => {
                temp(error, result);
            })
    } else {
        client.db(dbName).
            collection(col).
            insertOne(data, (error, result) => {
                temp(error, result);
            })
    }
    client.close();
});

/**
 * 更新数据
 * @param dbName {String} (可选)数据库名
 * @param col {String} 集合名
 * @param condition {Object} (可选,默认为全部)更新的条件
 * @param set {Object} 更新的值
 * @param type {Boolean} (可选,默认为true更新全部) 选择更新单条还是多条
 * @returns {Promise}
 */
const update = ({dbName = db, col, condition = {}, set, type = true}) => new Promise(async (resolve, reject) => {
    function temp (error, result) {
        error ? reject(error) : resolve(result);
        console.log(`成功更新${result.result.nModified}条数据!`);
    }

    const client = await connection();
    if (type) {
        client.db(dbName).
            collection(col).
            updateMany(condition, {$set: set}, (error, result) => {
                temp(error, result);
            })
    } else {
        client.db(dbName).
            collection(col).
            updateOne(condition, {$set: set}, (error, result) => {
                temp(error, result);
            })
    }
    client.close();
});

/**
 * 删除数据
 * @param dbName {String} (可选)数据库名
 * @param col {String} 集合名
 * @param condition {Object} (可选,默认为全部)更新的条件
 * @param type {Boolean} (可选,默认为true更新全部) 选择更新单条还是多条
 * @returns {Promise}
 */
const delData = ({dbName = db, col, condition = {}, type = true}) => new Promise(async (resolve, reject) => {
    function temp (error, result) {
        error ? reject(error) : resolve(result);
        console.log(`成功删除${result.deletedCount}条数据!`);
    }

    const client = await connection();
    if (type) {
        client.db(dbName).
            collection(col).
            deleteMany(condition, (error, result) => {
                temp(error, result);
            })
    } else {
        client.db(dbName).
            collection(col).
            deleteOne(condition, (error, result) => {
                temp(error, result);
            })
    }
    client.close();
});

/**
 * 查询数据
 * @param dbName {String} (可选)数据库名
 * @param col {String} 集合名
 * @param query {Object} (可选,默认查询全部)查询条件
 * @param sort {Object} (可选,默认不排序)1为升序,-1为降序
 * @param limit {Number} (可选,默认为全部)要查询的数据条数
 * @param skip {Number} (可选,默认不跳过)要跳过的数据
 * @returns {Promise}
 */
const find = ({dbName = db, col, query = {}, sort = null, limit = 0, skip = 0}) => new Promise(async (
    resolve, reject) => {
    const client = await connection();
    let temp = client.db(dbName).
        collection(col).
        find(query);
    if (!!sort) {
        temp = temp.sort(sort);
    }
    temp.skip(0).
        limit(0).
        toArray((error, result) => {
            error ? reject(error) : resolve(result);
        });
    client.close();
});

module.exports = {
    url,
    db,
    insert,
    update,
    delData,
    find
};
