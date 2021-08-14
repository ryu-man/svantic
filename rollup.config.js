import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import sveltePreprocess from 'svelte-preprocess'
import css from 'rollup-plugin-css-only'
const pkg = require('./package.json')

const production = !process.env.ROLLUP_WATCH
const { name } = pkg

export default {
  input: './src/index.js',
  output: [
    {
      dir: 'dist/module',
      sourcemap: true,
      format: 'es',
      entryFileNames: 'index.js',
      chunkFileNames: '[name].js'
    },
    {
      dir: 'dist/nomodule',
      sourcemap: true,
      format: 'system',
      name: pkg.name,
      entryFileNames: 'index.js',
      chunkFileNames: '[name].js'
    }
  ],

  plugins: [
    svelte({
      // enable run-time checks when not in production

      compilerOptions: {
        dev: !production
      },
      emitCss: false,
      preprocess: sveltePreprocess({})
    }),
    // we'll extract any component CSS out into
    // a separate file - better for performance
    css({ output: 'bundle.css'}),
    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      dedupe: ['svelte'],
      extensions: ['.js']
    }),
    commonjs(),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser()
  ],
  watch: {
    clearScreen: true
  },
  external: ['fomantic-ui', 'jquery']
}
