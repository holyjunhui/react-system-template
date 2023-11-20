import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
import eslint from 'vite-plugin-eslint'
// import eslint from 'vite-plugin-eslint'
// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '')

  return {
    server: {
      port: 9527,
      proxy: {
        '/api': {
          target: env.VITE_BASE_URL, // 代理接口地址 .env.development中改变
          changeOrigin: true,
          secure: false,
          // rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, 'src'),
        },
      ],
    },
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      }),
      eslint(),
      checker({
        typescript: true,
      }),
    ],
  }
})
