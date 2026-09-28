import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      runtime: 'nodejs20.x'
    }),
    prerender: {
      // The issue is static once published; a dead internal link should fail
      // the build rather than ship.
      handleHttpError: 'fail'
    }
  }
};

export default config;
