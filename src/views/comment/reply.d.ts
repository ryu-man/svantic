import type { SvelteComponentTyped } from 'svelte'
import type { Component } from "../../component";

interface ReplyProps extends Component{}

/**
 * @description Comment Reply from
 * @example
 *  <Comment.reply>
        <Button type="{['primary','submit', 'labeled', 'icon']}" >
          <Icon name="edit" /> Add Reply
        </Button>
    </Comment.reply>
 */
export default class Reply extends SvelteComponentTyped<ReplyProps> {}
