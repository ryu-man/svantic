<script context="module">
</script>

<script>
	import '../../../../semantic/dist/components/site.min.css';
	import '../../../../semantic/dist/components/reset.min.css';
	import '../../../../semantic/dist/components/dimmer.min.css';
	import '../../../../semantic/dist/components/transition.min.css';
	import '../../../../semantic/dist/components/modal.min.css';

	import { createEventDispatcher, onMount as onMounted } from 'svelte';
	import { classNames, css } from '../../utils';
	import { modal } from '../utils';

	let _class = '';
	export { _class as class };
	export let size = '';
	export let basic = false;
	export let active = false;
	export let overlay = false;
	export let inverted = false;
	export let fullscreen = false;
	export let style = {};
	export let settings;
	export let onMount;

	const executer = modal(settings);
	const dispatch = createEventDispatcher();

	onMounted(() => {
		onMount?.($executer);
		dispatch('mount', $executer);
	});

	$: executer.setSettings(settings);

	/**********************************************************************************/

	export function mounted(callback) {
		onMount = callback;
	}

	export function setSettings(settings) {
		executer.setSettings(settings);
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

	export function toggle() {
		executer.module('toggle');
		return this;
	}

	export function refresh() {
		executer.module('refresh');
		return this;
	}

	export function showDimmer() {
		executer.module('show dimmer');
		return this;
	}

	export function hideDimmer() {
		executer.module('hide dimmer');
		return this;
	}

	export function hideOthers() {
		executer.module('hide others');
		return this;
	}

	export function hideAll() {
		executer.module('hide all');
		return this;
	}

	export function cacheSizes() {
		executer.module('cache sizes');
		return this;
	}

	export function canFit() {
		return executer.module('can fit');
	}

	export function isActive() {
		return executer.module('is active');
	}

	export function setActive() {
		executer.module('set active');
		return this;
	}
</script>

<div
	bind:this={$executer}
	use:css={style}
	class={classNames(_class, 'ui', { basic, active, overlay, fullscreen, inverted }, size, 'modal')}
>
	<slot />
</div>
