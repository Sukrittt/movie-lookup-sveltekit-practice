<script>
	import { fly } from 'svelte/transition';

	import PopularMovies from '../components/PopularMovies.svelte';
	import SearchMovie from '../components/SearchMovie.svelte';

	export let data;
</script>

<section in:fly={{ y: 50, duration: 300, delay: 300 }} out:fly={{ duration: 300 }}>
	<SearchMovie />
	<PopularMovies movies={data.popular} />
</section>

<style>
	section {
		margin: 2em 0;
	}
</style>
