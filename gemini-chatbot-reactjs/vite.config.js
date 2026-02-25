import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages 部署的基础路径：仓库名（必须和GitHub仓库名完全一致）
const githubRepoName = '1111';
const base = process.env.NODE_ENV === 'production' ? `/${githubRepoName}/` : '/';

export default defineConfig({
  plugins: [react()],
  base: base, // 生产环境用仓库路径，开发环境用根路径
  build: {
    outDir: 'dist', // 打包输出目录（默认dist，无需修改）
    assetsDir: 'assets', // 静态资源目录
    emptyOutDir: true, // 打包前清空dist文件夹（避免旧文件残留）
    sourcemap: false // 生产环境关闭sourcemap，减小打包体积
  }
});