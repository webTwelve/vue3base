import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      eslintrc: {
        enabled: true // <-- this
      },
      dts: 'src/auto-imports.d.ts',
      imports: ['vue', 'vue-router'],

      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${path.resolve(
            __dirname,
            'src/assets/style/base.less'
          )}";`
        },
        javascriptEnabled: true
      }
    }
  }
})
