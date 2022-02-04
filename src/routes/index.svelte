<script>
	import {
		Button,
		Dropdown,
		DropdownText,
		DropdownMenu,
		DropdownItem,
		Progress,
		ProgressBar,
		Modal,
		ModalHeader,
		ModalContent,
		ModalActions,
		Search,
		JQuery,
		controllable
	} from 'svantic';

	let showModal = false;

	const modalController = controllable((controller) => {
		console.log("show modal")
		controller.show();
	});
</script>

<JQuery>
	<h1>Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
	<Button on:click={() => (showModal = !showModal)}>open modal</Button>
	<Dropdown selection>
		<DropdownText>Select from the list</DropdownText>
		<DropdownMenu>
			<DropdownItem>Ara</DropdownItem>
			<DropdownItem>Eng</DropdownItem>
		</DropdownMenu>
	</Dropdown>

	<Progress value={50}>
		<ProgressBar />
	</Progress>

	<Modal bind:this={$modalController} settings={{}}>
		<ModalHeader>Header</ModalHeader>
		<ModalContent>Content</ModalContent>
		<ModalActions>
			<Button>Cancel</Button>
			<Button>Save</Button>
		</ModalActions>
	</Modal>

	<Search >

	</Search>
</JQuery>
