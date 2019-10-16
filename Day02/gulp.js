// 导入模块
const fs = require('fs');

/**
 * 读取文件
 * @param path {String} 要读取文件的路径
 * @returns {Promise}
 */
const readSrc = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            err ? reject(err) : resolve(data.toString());
        })
    })
};

/**
 * 写入文件
 * @param path {String} 要写入文件的路径
 * @param data {String} 数据
 * @returns {Promise}
 */
const writeDist = (path, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, err => {
            err ? reject(err) : resolve();
        })
    })
};

/**
 * 删除console.log
 * @param data {String} 要处理额数据
 * @returns {void | string} 处理后的数据
 */
const delConsole = data => {
    return data.replace(/console.log[\S\s]+?;/g, '');
};
/**
 * 删除注释
 * @param data {String} 要处理额数据
 * @returns {void | string} 处理后的数据
 */
const delComment = data => {
    // 当行注释 \/\/[\s\S]+?$
    // 块级注释 \/\*[\s\S\n]+?(\*\/)$
    data = data.replace(/\/\/[\s\S]+?$/gm, '');
    return data.replace(/\/\*[\s\S\n]+?\*\/$/gm, '');
};

/**
 * 删除换行和空格,替换语法
 * @param data 要处理额数据
 * @returns {void | string} 处理后的数据
 */
const forMat= data =>{
    // 替换const和let
    data = data.replace(/let|const/g,'var');
    // 删除空格
    data = data.replace(/(?<!var|return)\s/g,'');
    // 删除无用';'号
    data =  data.replace(/\;?\}\;?/g,'}');
    // 更改箭头函数--不带参
    // data = data.replace(/(\(\))?=>/g,'function()');
    // 更改箭头函数--不带参
    // data = data.replace(/(\(\))?=>/g,'function()');
    return data;
};

(async () => {
    let code = await readSrc('src/test.js');
    code = await forMat(delComment(delConsole(code)));
    await writeDist('dist/test.js', code);
})();