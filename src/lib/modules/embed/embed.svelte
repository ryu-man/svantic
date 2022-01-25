<script context="module">
</script>

<script>
	import '../../../../semantic/dist/components/site.min.css';
	import '../../../../semantic/dist/components/reset.min.css';
	import '../../../../semantic/dist/components/transition.min.css';
	import '../../../../semantic/dist/components/embed.min.css';

	import { createEventDispatcher, onMount as onMounted } from 'svelte';

	import { css } from '../../utils';
	import { embed } from '../utils';

	let _class = '';
	export { _class as class };
	export let style = {};
	export let data = {};
	export let onMount = (_) => {};

	export let settings = {};

	const executer = embed(settings);
	const dispatch = createEventDispatcher();

	onMounted(() => {
		onMount?.($executer);
		dispatch('mount', $executer);
	});

	let _data = {
		source: '',
		id: '',
		placeholder: '',
		...data
	};

	export function change(source, id, url) {
		executer.module('change', source, id, url);
		return this;
	}

	export function reset() {
		executer.module('reset');
		return this;
	}

	export function show() {
		executer.module('show');
		return this;
	}

	export function hide() {
		executer.module('hide');
		return this;
	}

	export function getId() {
		return executer.module('get id');
	}

	export function getPlaceholder() {
		return executer.module('get placeholder');
	}

	export function getSources() {
		return executer.module('get sources');
	}

	export function getType() {
		return executer.module('get type');
	}

	export function getUrl() {
		return executer.module('get url');
	}

	export function hasPlaceholder() {
		return executer.module('has placeholder');
	}

	export function ready() {
		return executer.ready;
	}
</script>

<div
	bind:this={$executer}
	use:css={style}
	class="{_class} ui embed"
	data-source={_data.source}
	data-id={_data.id}
	data-placeholder={_data.placeholder}
>
	<slot />
</div>
