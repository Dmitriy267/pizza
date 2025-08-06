import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vercel from 'vite-plugin-vercel';

// https://vite.dev/config/
export default defineConfig({
    base: process.env.NODE_ENV === 'production' ? '/pizza/' : '/',
    server: {
        port: process.env.PORT as unknown as number,
    },
    plugins: [react(), vercel()],
});
