import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 核心：base 必须和 GitHub 仓库名一致，且 build 配置确保打包完整
export default defineConfig({
  plugins: [react()],
  // 基准路径：严格等于仓库名，末尾带 /
  base: '/1111/',
  build: {
    outDir: 'dist', // 打包输出目录
    assetsDir: 'assets', // 静态资源目录（避免 Vite 自动加随机前缀）
    // 确保打包后的资源路径是相对的（兼容 Pages 路径规则）
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash].[ext]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
  // 开发环境配置（确保和生产环境路径逻辑一致）
  server: {
    open: true,
    port: 5173,
  },
});