const mongo = require('mongodb');

let url = 'mongodb://localhost';
let db = 'test';
// 连接数据库集合
connection = () => new Promise((resolve, reject) => {
    mongo.MongoClient.connect(url, (error, result) => {
        error ? reject(error) : resolve(result);
        console.log('数据库连接成功!');
    })
});

// 插入数据
const insert = ({dbName = db, col, data}) => new Promise(async (resolve, reject) => {
    function temp(error, result) {
        error ? reject(error) : resolve(result);
        console.log(`成功插入${result.insertedCount}条数据!`);
    }

    const client = await connect();
    if (Array.isArray(data)) {
        client.db(dbName).collection(col).insertMany(data, (error, result) => {
            temp(error, result);
        })
    } else {
        client.db(dbName).collection(col).insertOne(data, (error, result) => {
            temp(error, result);
        })
    }
    client.close();
});

// 更新数据
const update = ({dbName = db, col, condition = {}, set, type = true}) => new Promise(async (resolve, reject) => {
    function temp(error, result) {
        error ? reject(error) : resolve(result);
        console.log(`成功更新${result.result.nModified}条数据!`);
    }

    const client = await connect();
    if (type) {
        client.db(dbName).collection(col).updateMany(condition, set, (error, result) => {
            temp(error, result);
        })
    } else {
        client.db(dbName).collection(col).updateOne(condition, set, (error, result) => {
            temp(error, result);
        })
    }
    client.close();
});

// 删除数据
const delData = ({dbName = db, col, condition = {}, type = true}) => new Promise(async (resolve, reject) => {
    function temp(error, result) {
        error ? reject(error) : resolve(result);
        console.log(`成功删除${result.deletedCount}条数据!`);
    }

    const client = await connect();
    if (type) {
        client.db(dbName).collection(col).deleteMany(condition, (error, result) => {
            temp(error, result);
        })
    } else {
        client.db(dbName).collection(col).deleteOne(condition, (error, result) => {
            temp(error, result);
        })
    }
    client.close();
});

// 查询数据
find = ({dbName = db, col, data = {}}) => new Promise(async (resolve, reject) => {
    const client = await connect();
    client.db(dbName).collection(col).find(data).toArray((error, result) => {
        error ? reject(error) : resolve(result);
    });
    client.close();
});

// (async () => {
//     await connection();
//     const data = await find({col: 'test'});
//     console.log(data);
// })();
