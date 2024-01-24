/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const path = require('path')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()

// 将静态文件托管到 public 目录
app.use(express.static('build'))

// 添加一个转发中间件，将 /api 转发至指定地址
app.use(
  '/api',
  createProxyMiddleware({
    target: 'http://192.168.15.76:1399', // 转发目标地址
    changeOrigin: true, // 修改请求头中的 Origin 字段
    // secure: false, // 启用安全连接，支持 HTTPS，设置为false为忽略证书错误
  })
)

// 在你应用 JavaScript 文件中包含了一个 script 标签
// 的 index.html 中处理任何一个 route
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

// 启动服务器
app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running at: http://localhost:8080')
})
