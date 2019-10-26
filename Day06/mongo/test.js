const mongoFn = require('./t1');

(async ()=>{
    let zz=await mongoFn.find({col:'zz',sort:{uid:-1}});
    console.log(zz);
})();