import { defineConfig } from 'vite' //配置代码提示
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteMockServe } from 'vite-plugin-mock'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  //样式相关
  css:{},
  //打包相关
  esbuild:{},
  //别名
  alias:{
    "@": path.resolve(__dirname,"src"),
    "comps": path.resolve(__dirname,"src/components"),
    "views": path.resolve(__dirname,"src/views"),
    "routes": path.resolve(__dirname,"src/routes"),
    "utils": path.resolve(__dirname,"src/utils"),
    "styles": path.resolve(__dirname,"src/styles"),
    "plugins": path.resolve(__dirname,"src/plugins"),
  },
  //插件基于Rollup ,利用插件去扩展项目
  plugins: [vue(), vueJsx(), viteMockServe({supportTs: false})]
})
