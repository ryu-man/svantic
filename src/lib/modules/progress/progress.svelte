<script context="module">
</script>

<script>
	import '../../../../semantic/dist/components/site.min.css';
	import '../../../../semantic/dist/components/reset.min.css';
	import '../../../../semantic/dist/components/transition.min.css';
	import '../../../../semantic/dist/components/progress.min.css';

	import { createEventDispatcher, onMount as onMounted } from 'svelte';
	import { classNames, css } from '../../utils';
	import { progress } from '../utils';

	let _class;
	export { _class as class };
	export let indicating;
	export let attached;
	export let speed;
	export let size;
	export let color;
	export let value = 0;
	export let total = 100;
	export let inverted = false;
	export let indeterminate = false;
	export let disabled = false;
	export let error = false;
	export let warning = false;
	export let success = false;
	export let active = false;
	export let style;
	export let onMount;

	export let settings = {};

	const executer = progress(settings);
	const dispatch = createEventDispatcher();

	onMounted(() => {
		onMount?.($executer);
		dispatch('mount', $executer);
	});

	$: executer.setSettings(settings);

	export function setPercent(percent) {
		executer.module('set percent', percent);
		return this;
	}

	export function setProgress(value) {
		executer.module('set progress', value);
		return this;
	}

	export function increment(incrementValue) {
		executer.module('increment', incrementValue);
		return this;
	}

	export function decrement(decrementValue) {
		executer.module('decrement', decrementValue);
		return this;
	}

	export function updateProgress(value) {
		executer.module('update progress', value);
		return this;
	}

	export function complete(keepState) {
		executer.module('complete', keepState);
		return this;
	}

	export function reset() {
		executer.module('reset');
		return this;
	}

	export function setTotal(total) {
		executer.module('set total', total);
		return this;
	}

	export function getText(text) {
		return executer.module('get text', text);
	}

	export function getNormalizedValue(value) {
		return executer.module('get normalized', value);
	}

	export function getPercent() {
		return executer.module('get percent');
	}

	export function getValue() {
		return executer.module('get value');
	}

	export function getTotal() {
		return executer.module('get total');
	}

	export function isComplete() {
		return executer.module('is complete');
	}

	export function isSuccess() {
		return executer.module('is success');
	}

	export function isWarning() {
		return executer.module('is warning');
	}

	export function isError() {
		return executer.module('is error');
	}

	export function isActive() {
		return executer.module('is active');
	}

	export function setActive() {
		executer.module('set active');
		return this;
	}

	export function setWarning(text, keepState) {
		executer.module('set warning', text, keepState);
		return this;
	}

	export function setSuccess(text, keepState) {
		executer.module('set success', text, keepState);
		return this;
	}

	export function setError(text, keepState) {
		executer.module('set error', text, keepState);
		return this;
	}

	export function setDuration(value) {
		executer.module('set duration', value);
		return this;
	}

	export function setLabel(text) {
		executer.module('set label', text);
		return this;
	}

	export function setBarLabel(text) {
		executer.module('set bar', text);
		return this;
	}

	export function removeActive() {
		executer.module('remove active');
		return this;
	}

	export function removeWarning() {
		executer.module('remove warning');
		return this;
	}

	export function removeSuccess() {
		executer.module('remove success');
		return this;
	}

	export function removeError() {
		executer.module('remove error');
		return this;
	}
</script>

<div
	bind:this={$executer}
	use:css={style}
	data-value={value}
	data-total={total}
	class={classNames(
		_class,
		'ui',
		speed,
		size,
		color,
		{
			indicating,
			disabled,
			error,
			warning,
			success,
			active,
			inverted,
			attached,
			indeterminate
		},
		'progress'
	)}
>
	<slot />
</div>
