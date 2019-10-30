const mongoFn = require('./t1');
const mongodb = require('mongodb');


(async ()=>{
    console.log(await mongoFn.getDataBase());
    console.log(await mongoFn.getCollection('test'));
})();
// mongoFn.getDataBase().then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err)
// });
