import type { SvelteComponentTyped } from "svelte";
import type { Component } from "../../component";

interface AuthorProps extends Component{}

type AuthorEvents = {
    mount: CustomEvent<HTMLDivElement>
  }

export default class Author extends SvelteComponentTyped<AuthorProps, AuthorEvents>{}
