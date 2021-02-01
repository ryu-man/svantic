import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from "svelte-preprocess";
import typescript from '@rollup/plugin-typescript'
import css from "rollup-plugin-css-only"
const pkg = require('./package.json');

const production = !process.env.ROLLUP_WATCH;
const { name } = pkg
const globals = {
	sveltic: "svantic"
}
function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

export default {
	input: './src/index.js',
	output: [
		{ file: pkg.module, format: 'es', globals},
		{ file: pkg.main, format: 'umd', name, globals}
	],
	inlineDynamicImports: true,
	plugins: [
		svelte({
			// enable run-time checks when not in production

			compilerOptions: {
				dev: !production,

			},
			preprocess: sveltePreprocess({}),
		}),
		// we'll extract any component CSS out into
		// a separate file - better for performance
		css({ output: 'dist/bundle.css' }),
		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			dedupe: ['svelte'],
			extensions: [".js", ".ts"]
		}),
		commonjs(),
		typescript({ sourceMap: !production }),

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	],
	watch: {
		clearScreen: true
	},
	external: [
		"fomantic-ui"
	]
}
