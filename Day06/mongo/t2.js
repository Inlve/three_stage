const MongoClient = require('mongodb').MongoClient;

// 连接数据库
MongoClient.connect('mongodb://localhost', (error, result) => {
    if (error) throw error;
    console.log('数据库成功连接!');
    const db = result.db('test');
    console.log(db);

    // 创建集合
    // db.createCollection('zz',(error1, result1) => {
    //     if (error1) throw error1;
    //     console.log('创建集合!');
    //     result.close();
    // });

    // 插入单条数据 insertOne()
    // db.collection('zz').insertOne({
    //     name:'zz1',
    //     title:'测试1'
    // },(error1, result1) => {
    //     if(error1) throw error1;
    //     console.log("数据插入成功!");
    // });

    // 插入多条数据 insertMany()
    // db.collection('test').insertMany([
    //     {name:'第一条数据'},
    //     {name:'第二条数据'},
    //     {name:'第三条数据'},
    // ],(error1, result1) => {
    //     if(error1) throw error1;
    //     console.log(`成功插入${result1.insertedCount}条数据!`);
    // });

    // 查询数据 find()
    // 查询所有数据
    // db.collection('test').find({}).toArray((error1,result1)=>{
    //     if(error1) throw error1;
    //     console.log(result1);
    // });
    // 按条件查找
    // db.collection('test').find({name:'第一条数据'}).toArray((error1,result1)=>{
    //     if(error1) throw error1;
    //     console.log(result1);
    // });

    // 更新单条数据 updateOne()
    // db.collection('zz').updateOne(
    //     // 条件
    //     {name:'zz'},
    //     // 更新的值
    //     {$set:{name:'zz2',title:'测试2'}},
    //     (error1, result1) => {
    //         if(error1) throw error1;
    //         console.log('更新成功!');
    //     }
    // );

    // 更新多条数据 updateMany()
    // db.collection('zz').updateMany(
    //     // 条件
    //     {name:'zz'},
    //     // 更新的值
    //     {$set:{name:'zz3',title:'测试3'}},
    //     (error1, result1) => {
    //         if(error1) throw error1;
    //         console.log(`成功更新${result1.result.nModified}条数据!`);
    //     }
    // );

    // 删除单条数据 deleteOne()
    // db.collection('zz').deleteOne({name:'zz2'},(error1, result1) => {
    //     if(error1) throw error1;
    //     console.log(`成功删除${result1.deletedCount}条数据`);
    // });

    // 删除多条数据 deleteMany()
    // db.collection('zz').deleteMany({name:'zz3'},(error1, result1) => {
    //     if(error1) throw error1;
    //     console.log(`成功删除${result1.deletedCount}条数据`);
    // });

    // 清空集合
    // db.collection('zz').deleteMany({},(error1, result1) => {
    //     if(error1) throw error1;
    //     console.log(`成功删除${result1.deletedCount}条数据`);
    // });

    // 排序 sort()
    // title:1 升序/-1降序 ,按title字段来排序
    // db.collection('zz').
    //     find().
    //     sort({uid: -1}).
    //     toArray((error, result) => {
    //         if (error) throw error;
    //         console.log(result);
    //     });

    // 查询分页 limit()
    // 读取前两条数据
    // db.collection('zz').find().limit(2).toArray((error, result) => {
    //     if (error) throw error;
    //     console.log(result);
    // });
    // 跳过前两条数据,再读取两条
    // skip()跳过
    // db.collection('zz').find().skip(1).limit(3).toArray((error, result) => {
    //     if (error) throw error;
    //     console.log(result);
    // });

    // 连接操作 $lookup
    // db.collection('test').aggregate([
    //     {
    //         $lookup: {
    //             from: 'zz',// 右集合
    //             localField: 'uid',// 左集合join字段
    //             foreignField: 'uid',// 右集合join字段
    //             as: 'z_id'//新生成的字段,类型(array)
    //         }
    //     }
    // ]).toArray(((error1, result1) => {
    //     if(error1) throw error1;
    //     console.log(JSON.stringify(result1));
    //     // console.log(result1);
    // }));

    // 删除集合 drop()
    // db.collection('test').drop((error,delOk)=>{
    //     // 执行成功delOK为true否则为false
    //     if(error) throw error;
    //     if(delOk) console.log('集合已删除!');
    // });

    result.close();
});
