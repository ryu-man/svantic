# Svantic UI

Svantic is a set of UI components for [Svelte](https://svelte.dev) based on the [Fomantic-UI](http://fomantic-ui.com) framework.

## Documentation

-- Coming soon --

## Installation

```bash
npm install svantic

yarn add svantic
```

## Usage

```html
<script>
  // import any components you want
  import { Button } from 'svantic'

</script>

<Button >Hello world</Button>
```

## Quick start with new project

Create a new project based on [sveltejs/template](https://github.com/sveltejs/template)

```bash
npx degit sveltejs/template svantic-app
cd svantic-app
npm install
```

<!-- Or you can our svantic-template -->

_NOTE: There are of course other ways to set up a project using svelte. This is just the quickest way to start._

### Rollup Configuration

Because svantic uses dymanic import for better footprint and performance you have to configure rollup as following:

```js

output: {
  ...,
  dir: "path to output directory",
  entryFileNames: "[name].js",
  chunkFileNames: "[name].js"
},
  
```

Add svantic and modify `src/App.svelte` file in the following way

```html
<script>
    // import any components
    import { Button } from 'svantic';

    let count = 1;
</script>


<p>you clicked {count} times!</p>

<Button color="Red" on:click={() => count+= 1}>
    Increment
</Button>
```

...then start [Rollup](https://rollupjs.org/)

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000)

## Development

1. Clone this repo: `git clone https://github.com/ryu-man/svantic.git`
2. Install dependencies: `npm i`
3. Start building fomantic: `npm run build:fomantic`
4. Start the automated build: `npm run build`
5. Open url that console prints in your browser

## License

Code released under [MIT license](./Licence) .

Copyright &copy; - ryu-man.
