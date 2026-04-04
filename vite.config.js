import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Client-Property-Seller/',
  server: {
    port: 3000,
    open: true,
  },
  build: {
    cssMinify: true,
  },
});
