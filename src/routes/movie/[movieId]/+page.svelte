<script>
	import { fly } from 'svelte/transition';

	export let data;
	const { movie } = data;
</script>

<div
	class="movie-details"
	in:fly={{ y: 50, duration: 300, delay: 300 }}
	out:fly={{ duration: 300 }}
>
	<div class="img-container">
		<img src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path} alt={movie.title} />
	</div>
	<div class="text-container">
		<h1>{movie.title}</h1>
		<p class="overview">{movie.overview}</p>
		<p>
			<span>Release Date</span>
			{movie.release_date} <br />
			<span>Budget: </span> ${movie.budget} <br />
			<span>Rating: </span>
			{movie.vote_average} <br />
			<span>Runtime: </span>
			{movie.runtime}mins
		</p>
	</div>
</div>

<style>
	h1 {
		padding: 1rem 0 2rem;
	}
	p {
		padding: 1rem 0;
	}
	.img-container {
		width: 100%;
	}
	img {
		width: 100%;
		border-radius: 1rem;
	}
	.movie-details {
		margin: 2rem 20%;
	}
	span {
		font-weight: bold;
	}
</style>
