import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    emptyOutDir: true,
    chunkSizeWarningLimit: 1200,
  },
  ssr: {
    // react-helmet-async ships as CommonJS; bundle it so its named exports
    // resolve correctly in the Node ESM prerender script.
    noExternal: ['react-helmet-async'],
  },
});
