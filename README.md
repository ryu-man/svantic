<p style="text-align:center">
  <img alt="SVANTIC" src="./banner_new.png" width="100%"/>
    <span style="font-size:24pt; color:white;">
    A set of UI components for <a href="https://svelte.dev">Svelte</a> framework based on <a href="http://fomantic-ui.com">Fomantic-UI</a> library
    </span>
  <br>
  <br>
  <a href="https://www.npmjs.com/package/svantic">
    <img src="https://img.shields.io/npm/v/svantic.svg?style=flat-square" alt="npm version">
  </a>
  <a href="https://github.com/ryu-man/svantic/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/svantic.svg?style=flat-square" alt="license">
  </a>
</p>

## Documentation

-- Coming soon --

## Installation

```bash
# npm
npm install svantic
# yarn
yarn add svantic
```

## Quick start with new project

Create a new project based on [sveltejs/template](https://github.com/sveltejs/template)

```bash
npx degit sveltejs/template svantic-app
cd svantic-app
# npm
npm install
# yarn
yarn install
```

Or you can use our [svantic template](https://github.com/ryu-man/svantic-template), it comes pre-configured

```bash
npx degit ryu-man/svantic-template#main svantic-app
cd svantic-app
# npm
npm install
# yarn
yarn install
```

<!-- Or you can our svantic-template -->

_NOTE: There are of course other ways to set up a project using svelte. This is just the quickest way to start._

### Rollup Configuration

Because svantic uses dymanic import for better footprint and performance you have to configure rollup as following:

```js

output: {
  ...,
  dir: "path to output directory",
  entryFileNames: "index.js",
  chunkFileNames: "[name].js"
},

```

## Breaking Change


### Svantic component
 used to load global scripts and stylesheets, must mounted on the top level of the app

 ```html
 <script>
  import { Svantic, ... } from 'svantic'
</script>

// 
<Svantic jquery={import('jquery')>
  ...
</Svantic>
 ```

### onMount prop
allows acces to the top level dom elem instead of module controller

### module controller
to controll a module you use bind:this={varname} on the component to save an instance of its controller

### controllable store
is a reactive store that allows subscribtion to a module and execute a callback when the component is mounted
```html
<script>
    // import modules
    import { Dropdown, controllable, Svantic } from 'svantic';

    const dropdownController = controllable(controller=>{
      // do something
    })
</script>

<Svantic jquery={import('jquery')>
  <Dropdown bind:this={$dropdownController}>
      // ...
  </Dropdown>
</Svantic>
```
  

## Usage

Add svantic and modify `src/App.svelte` file in the following way

```html
<script>
  // import any components you want
  import { Button, Svantic } from 'svantic'
</script>

<Svantic jquery={import('jquery')>
  <Button>Hello world</Button>
</Svantic>
```

or

```html
<script>
    // import modules
    import { Dropdown, initDropdown, controllable, Icon, Svantic } from 'svantic';

    // call this function if you want to use Module.SubModule syntax, ex: Dropdown.Item
    initDropdown()

    const dropdownController = controllable(controller=>{
      // called when the component is mounted and ready
      // access the controller and manupilate dropdown
    })


</script>

// mount Svantic component on the top level of the app
<Svantic jquery={import('jquery')>
  // onMount: allows control module behaviors
  // settings: pass module settings
  <Dropdown 
    bind:this={$dropdownController} 
    onMount={(domElem) => {}} 
    settings={{}}
    selection >
    <Icon name="caret down" />
    <Dropdown.Text>Select language</Dropdown.Text>
    <Dropdown.Menu>
      <Dropdown.Item>English</Dropdown.Item>
      <Dropdown.Item>Arabic</Dropdown.Item>
      <Dropdown.Item>Spanish</Dropdown.Item>
      <Dropdown.Item>German</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
</Svantic>
```

Another way to use Module.SubModule syntax

```html
<script>
    import { Icon, Svantic } from 'svantic'
    import * as Dropdown from 'svantic/modules/dropdown';
</script>

<Svantic jquery={import('jquery')>
  <Dropdown.default selection >
    <Icon name="caret down" />
    <Dropdown.Text>Select language</Dropdown.Text>
    <Dropdown.Menu>
      <Dropdown.Item>English</Dropdown.Item>
      <Dropdown.Item>Arabic</Dropdown.Item>
      <Dropdown.Item>Spanish</Dropdown.Item>
      <Dropdown.Item>German</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown.default>
</Svantic>
```

## Development

1. Clone this repo: `git clone https://github.com/ryu-man/svantic.git`
2. Install dependencies: `npm i`
3. Start building fomantic: `npm run build:fomantic`

## License

Code released under [MIT license](./Licence)

Copyright &copy; - ryu-man.
