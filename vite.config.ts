import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
// https://vitejs.dev/config/
export default defineConfig({
  appType: 'mpa',
  base: '/cheduleFront/',
  plugins: [
      vue(),
    vuetify({
      autoImport: true,
      styles: 'sass'
    }),
  ],
})