import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		package: {
			exports: (filePath) => ['index.js', 'package.json'].includes(filePath)
		},

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					svantic: path.resolve('./src/lib')
				}
			},
			server: {
				fs: [".."]
			}
		}
	}
};

export default config;
