# Svantic UI

Svantic is a set of UI components for [Svelte](https://svelte.dev) based on the [Fomantic-UI](http://fomantic-ui.com) framework.

# Documentation

-- Coming soon --


## Installation

_Note that you will need to have [Node.js](https://nodejs.org) installed_

```bash
npm install --save-dev svantic
```

## Usage

```html
<Textfield bind:value filled label="Name" message="Enter your name" />

<h1>Hello {value}!</h1>

<script>
    // import any components you want
    import { Textfield } from 'svantic';

    let value = 'world';
</script>
```
## Quick start with new project

Create a new project based on [sveltejs/template](https://github.com/sveltejs/template)

```bash
npx degit sveltejs/template svantic-app
cd svantic-app
npm install
```

_NOTE_: There are of course other ways to set up a project using svelte. This is just the quickest way to start.

Add components

```bash
npm install --save-dev svantic
```

Modify file `src/App.svelte` in the following way

```html
<script>
    // optional import focus-visible polyfill only once
    import 'focus-visible';
    // import any components
    import { Button, Checkbox } from 'svantic';

    let checked = true;
</script>

<Checkbox bind:checked>Checkbox</Checkbox>

<p>Checkbox is {checked ? 'checked' : 'unchecked'}</p>

<Button
    outlined
    shaped
    color="Red"
    on:click={() => { checked = !checked }}
>
    Inverse
</Button>
```


...then start [Rollup](https://rollupjs.org/)

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000)

# Development

1. Clone this repo: `git clone https://github.com/ryu-man/svantic.git`
2. Install dependencies: `npm i`
3. Start building fomantic: `npm run build:fomantic`
4. Start the automated build: `npm run build`
5. Open url that console prints in your browser

# License

Code released under MIT license.

Copyright &copy;, ryu-man.

