<script>
	import MovieCard from '../../../components/MovieCard.svelte';

	export let data;

	const { movies } = data;
</script>

{#if movies.length === 0}
	<p>No movies found</p>
{/if}

<div class="searched-movies">
	{#each movies as movie (movie.id)}
		<MovieCard {movie} />
	{/each}
</div>

<style>
	.searched-movies {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: 1rem;
		height: 20vh;
	}
	p {
		text-align: center;
		margin-top: 2em;
	}
</style>
