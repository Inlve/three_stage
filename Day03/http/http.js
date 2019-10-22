// 导入模块
const http = require('http');
const fs = require('fs');

// 创建http服务器
// req(request,请求头和请求体)
// res(response,响应头和响应体)
const server = http.createServer((req, res) => {
    new Promise(resolve => {
        let rawData = '';
        req.on('data', chunk => {
            rawData += chunk;
        });
        req.on('end', () => {
            console.log(rawData);
        })
    });
    res.writeHead(200);
    res.write('success');
    res.end();
}).listen(80);

// 发送get请求
// http.get("http://www.baidu.com", res => {
//     // 响应状态码
//     // console.log("Got response:"+res.statusCode);
//     let rawData = '';
//     res.on('data', chunk => {
//         rawData += chunk;
//     });
//     res.on('end', () => {
//         fs.writeFile('baidu.html', rawData, err => {
//             if (err)
//                 return console.log(err);
//         })
//     })
// }).on('error', err => {
//     console.log("Got error:" + err.message);
// });