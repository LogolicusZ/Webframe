<<<<<<< HEAD
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
=======
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
>>>>>>> parent of b0ab2c4 (Pre pages)

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
		pages: 'build',
		assets: 'build',
		fallback: '404.html',
		precompress: false,
		strict: true,
		prerender: {
			handleMissingId: (href, page) => {
			  // Ignore errors for '/#top' on any page
			  return href === '#top';
			},
		},
	
	}),
	paths: {
		base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
	}
		

	}
};

export default config;
