import type { SvelteComponentTyped } from 'svelte'

interface ReplyProps {}

/**
 * @description Comment Reply from
 * @example
 *  <Comment.Reply>
        <Button type="{['primary','submit', 'labeled', 'icon']}" >
          <Icon name="edit" /> Add Reply
        </Button>
    </Comment.Reply>
 */
export default class Reply extends SvelteComponentTyped<ReplyProps> {}
