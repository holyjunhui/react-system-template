// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import { defineConfig, loadEnv, PluginOption } from 'vite'
import { resolve, parse } from 'path'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'
import postcss from 'rollup-plugin-postcss'
import svgr from 'vite-plugin-svgr'
import terser from '@rollup/plugin-terser'
// eslint-disable-next-line import/no-extraneous-dependencies
// import { visualizer } from 'rollup-plugin-visualizer'
import typescript from '@rollup/plugin-typescript'
import htmlMinifier from 'rollup-plugin-html-minifier'
import htmlPlugin from 'vite-plugin-html-config'

/** @type {import('vite').UserConfig} */
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const extensions = ['.ts', '.tsx']
  return {
    base: '/',
    build: {
      outDir: 'build',
      assetsDir: 'static', // 将所有静态资源打包到 static 目录下
      cssCodeSplit: false,
      minify: 'esbuild',
      sourcemap: false,
      emptyOutDir: true,
      rollupOptions: {
        input: resolve(__dirname, 'index.html'),
        output: {
          manualChunks: {
            react: ['react'],
            'react-dom': ['react-dom'],
          },
          assetFileNames: (assetInfo: any) => {
            const { name, ext } = parse(assetInfo.name)
            if (ext !== '.js' && ext !== '.css') {
              // 针对富文本编辑器的模板图片不做hash处理
              if ((name?.endsWith('graph') || name?.endsWith('summary')) && ext === '.png') {
                return `static/media/${name}[extname]`
              }
              return `static/media/${name}-[hash][extname]`
            }
            return `static/[ext]/bundle-[hash].[ext]`
          },
          entryFileNames: 'static/js/main-[hash].js', // 将 JS 文件打包到 static/js 目录下
          chunkFileNames: 'static/js/bundle-[hash].js', // 将 JS chunk 文件打包到 static/js 目录下
          plugins: () => [
            nodeResolve({ extensions }),
            commonjs(),
            typescript(),
            babel({
              extensions,
              babelHelpers: 'bundled',
              exclude: 'node_modules/**',
              presets: [
                [
                  '@babel/preset-react',
                  '@babel/preset-env',
                  {
                    targets: '> 0.2%, IE 11, not dead, not op_mini all',
                    useBuiltIns: 'usage',
                    corejs: 3,
                  },
                ],
              ],
              plugins: [
                '@babel/plugin-transform-runtime',
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-proposal-class-properties',
                {
                  useESModules: true,
                },
              ],
            }),
            postcss({
              extract: true, // 将 CSS 提取到单独的文件中
              minimize: true, // 压缩 CSS 代码
            }),
            terser({
              format: {
                comments: false,
              },
            }),
            htmlMinifier({
              options: {
                removeComments: true,
              },
            }),
          ],
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
      react(),
      svgr(),
      viteCompression(),
      // 构建时间
      htmlPlugin({
        metas: [
          {
            name: 'builtTime',
            content: new Date().toLocaleString(),
          },
        ],
      }),
      // 分析图,仅本地调试使用
      // visualizer({
      //   emitFile: false,
      //   filename: 'analysis-chart.html', // 分析图生成的文件名
      //   open: true, // 如果存在本地服务端口，将在打包后自动展示
      // }) as PluginOption,
    ],
    define: {
      'process.env': {
        REACT_APP_ENV: env.REACT_APP_ENV,
        VITE_APP_ENV: env.VITE_APP_ENV,
        REACT_APP_BASE_URL: env.REACT_APP_BASE_URL,
      },
    },
  }
})
