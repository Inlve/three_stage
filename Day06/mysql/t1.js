const mysql = require('mysql');

// 连接数据库:
const connection = mysql.createConnection({
    /**
     * Config选项:
     * - `host`: 要连接的数据库的主机名
     * - `port`: 要连接的端口号(默认3306)
     * - `user`: 身份验证的MySQL用户名
     * - `password`: 该MySQL用户的密码
     * - `database`: 用于此连接的数据库名(可选)
     * - `charset`: 用于连接的字符集(默认: 'UTF_8_GENERAL_CI)
     * - `timezone`: 在MySQL服务器上配置的时区
     */
    host: 'localhost',
    user: 'root',
});
connection.connect(err=>{
    if (err){
        return console.error(`error connecting: ${err.stack}`);
    }

    console.log(`connected as id ${connection.threadId}`);
});