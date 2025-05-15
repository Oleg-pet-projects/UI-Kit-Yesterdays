import { defineConfig } from 'vite';

import plugins from './config/build/vite-plugins'
import resolve from './config/build/vite-resolve'
import server from './config/build/vite-server'

// https://vite.dev/config/
export default defineConfig({
  plugins,
  resolve,
  server
});
