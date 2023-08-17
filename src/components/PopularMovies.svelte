<script>
	import MovieCard from './MovieCard.svelte';

	export let movies;
</script>

<h3>Popular Movies</h3>

<div class="popular-movies">
	{#each movies as movie (movie.id)}
		<MovieCard {movie} />
	{/each}
</div>

<style>
	h3 {
		padding: 0 1rem;
	}
	.popular-movies {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: 1rem;
	}
</style>
