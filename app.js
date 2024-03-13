const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

// // 设置静态文件目录

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/img', express.static(path.join(__dirname, 'img')));


//添加跨域配置
app.use(cors());
// 设置路由来处理根路径请求
app.get('/', (req, res) => {
  // 发送HTML文件
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 监听端口3000，并在服务器启动时打印消息
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});