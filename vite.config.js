import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Serves the Vercel function in /api during `npm run dev`, reading keys from .env.local.
function localApi() {
  return {
    name: 'local-api',
    configureServer(server) {
      Object.assign(process.env, loadEnv(server.config.mode, process.cwd(), ''));
      server.middlewares.use('/api/google-reviews', async (req, res) => {
        const { default: handler } = await server.ssrLoadModule('/api/google-reviews.js');
        res.status = (code) => ((res.statusCode = code), res);
        res.json = (body) => {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(body));
        };
        await handler(req, res);
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), localApi()],
  // Don't watch build output, raw client media or upload zips (rewriting the zip crashed the dev server).
  server: { watch: { ignored: ['**/dist/**', '**/pic/**', '**/*.zip'] } },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
});
