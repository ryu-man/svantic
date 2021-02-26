import type { SvelteComponentTyped } from "svelte";
import type { Component } from "../../component";

interface AuthorProps extends Component{}

export default class Author extends SvelteComponentTyped<AuthorProps>{}