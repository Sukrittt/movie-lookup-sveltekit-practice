<script>
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';

	let query = '';
	let active = false;

	const cancelActive = () => {
		if (query) {
			active = true;
		} else {
			active = false;
		}
	};

	const submitSearch = (e) => {
		goto(`/search/${query}`);
	};
</script>

<form class="search" on:submit|preventDefault={submitSearch}>
	{#if !active}
		<label in:fly={{ y: -10, duration: 300 }} out:fly={{ y: -10, duration: 300 }} for="search_movie"
			>Search Movie</label
		>
	{/if}
	<input
		class={active ? 'selected' : ''}
		name="search_movie"
		type="text"
		bind:value={query}
		on:focus={() => (active = true)}
		on:blur={cancelActive}
	/>
	{#if query}
		<button in:fly={{ duration: 500 }} out:fly={{ duration: 500 }}>Search</button>
	{/if}
</form>

<style>
	.search {
		position: relative;
		width: 30%;
		margin: 1rem;
	}
	button {
		font-size: 0.7rem;
		padding: 0 1rem;
		background: rgb(96, 110, 201);
		color: white;
		font-weight: bold;
		border: none;
		position: absolute;
		bottom: 50%;
		right: 0;
		transform: translate(0, 50%);
		height: 100%;
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
		cursor: pointer;
	}
	button:disabled {
		opacity: 0.75;
		cursor: not-allowed;
	}
	input {
		width: 100%;
		border: none;
		font-size: 0.75rem;
		font-family: 'Poppins', sans-serif;
		outline: none;
		color: rgb(255, 255, 255);
		padding: 0.75rem 1rem;
		transition: background 0.75s ease-out;
		font-weight: bold;
		background: rgb(63, 63, 63);
		border-radius: 10px;
	}
	label {
		position: absolute;
		font-size: 0.8rem;
		top: 50%;
		left: 0;
		transform: translate(0, -50%);
		pointer-events: none;
		color: #fff;
		padding: 0 1rem;
	}
	input.selected {
		background: rgb(50, 50, 50);
	}
</style>
