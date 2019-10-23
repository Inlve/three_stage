// webpack配置文件
const path = require('path');

module.exports = {
    // 模式 production 生产模式 | development 开发模式
    mode: "development",

    // 入口文件
    entry: './src/index.js',

    // 出口文件
    output: {
        // 打包后的文件名
        filename: 'bundle.js',
        // 打包后的目录,必须是绝对路径
        path: path.resolve(__dirname, 'dist')
    },
    // 处理对应模块
    module: {
        rules: [
            // webpack根据正则表达式,来确定应该查找哪些文件,
            // 并将其提供给指定的loader
            {
                // 加载css
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            }, {
                // 加载图片 
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },{
                // 加载字体
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use:[
                    'file-loader'
                ]
            },{
                // 加载数据
                test: /\.xml$/,
                use:[
                    'xml-loader'
                ]
            }
        ]
    }
};
