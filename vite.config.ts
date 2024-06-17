import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "node:url";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()], //使用vue插件。
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("/src", import.meta.url)),
    },
  }, //通过@符，来快速找到src文件。不用使用相对路径来找来找去。
  server: {
    port: 4000, //设置服务启动端口号，是一个可选项，不要设置为本机的端口号，可能会发生冲突
    open: true, //是否自动打开浏览器，可选项
    cors: true, //允许跨域。
    // 设置代理
    proxy: {
      // 将请求代理到另一个服务器
      "/api": {
        target: "http://localhost:3001", //这是你要跨域请求的地址前缀
        // target: "http://dev.hyrc.talent.com", //这是你要跨域请求的地址前缀
        changeOrigin: true, //开启跨域
        rewrite: (path) => path.replace(new RegExp(`^/api`), ""), //去除前缀api
      },
    },
  },
});
