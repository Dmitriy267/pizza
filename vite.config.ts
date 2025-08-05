import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    base: 'https://dmitriy267.github.io/',
    plugins: [react()],
});
