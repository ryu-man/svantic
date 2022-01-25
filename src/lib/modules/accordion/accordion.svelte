<script context="module">
</script>

<script>
	import '../../../../semantic/dist/components/site.min.css';
	import '../../../../semantic/dist/components/reset.min.css';
	import '../../../../semantic/dist/components/transition.min.css';
	import '../../../../semantic/dist/components/accordion.min.css';

	import { createEventDispatcher, onMount as onMounted } from 'svelte';
	import { classNames, css } from '../../utils';
	import { accordion } from '../utils';

	let _class = '';
	export let fluid = false;
	export let vertical = false;
	export let following = false;
	export let text = false;
	export let menu = false;
	export let styled = false;
	export let inverted = false;
	export let settings = {};
	export let style = {};
	export let onMount;

	const executer = accordion(settings);
	const dispatch = createEventDispatcher();

	onMounted(() => {
		onMount?.($executer);
		dispatch('mount', $executer);
	});

	export function refresh() {
		executer.module('refresh');
		return executer.module;
	}

	export function open(index) {
		executer.module('open', index);
		return executer.module;
	}

	export function closeOthers() {
		executer.module('close others');
		return executer.module;
	}

	export function close(index) {
		executer.module('close', index);
		return executer.module;
	}

	export function toggle(index) {
		executer.module('toggle', index);
		return executer.module;
	}

	export function ready() {
		return executer.ready;
	}
</script>

<div
	bind:this={$executer}
	use:css={style}
	class={classNames(
		_class,
		'ui',
		{
			vertical,
			fluid,
			following,
			styled,
			inverted
		},
		'accordion',
		{ text, menu }
	)}
>
	<slot />
</div>
