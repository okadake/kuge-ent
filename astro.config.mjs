import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://okadake.github.io/kuge-ent/',
  base: '/kuge-ent/',
  output: 'static',
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});
