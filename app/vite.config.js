import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'


export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/apiv1/appointment':{
        target: 'http://localhost:3001/apiv1/appointment',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/apiv1\/appointment/, ''),
      },
      '/apiv1/barbershop':{
        target: 'http://localhost:3001/apiv1/barbershop',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/apiv1\/barbershop/, ''),
      },
      '/apiv1/user/login':{
        target: 'http://localhost:3001/apiv1/user/login',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/apiv1\/user\/login/, ''),
      },
      '/apiv1/user/logout':{
        target: 'http://localhost:3001/apiv1/user/logout',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/apiv1\/user\/logout/, ''),
      },
    }
  },
  resolve: {
    alias: [
      {
        find: "@root",
        replacement: path.resolve(path.join(__dirname, '/src'))
      },
      {
        find: "@core",
        replacement: path.resolve(path.join(__dirname, '/src/models/core'))
      },
      {
        find: "@auth",
        replacement: path.resolve(path.join(__dirname, '/src/models/auth'))
      },
      {
        find: "@appointment",
        replacement: path.resolve(path.join(__dirname, '/src/models/appointment'))
      },
    ]
  },
})
