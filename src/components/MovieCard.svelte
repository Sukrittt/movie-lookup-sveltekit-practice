<script>
	export let movie;
</script>

<a data-sveltekit-preload-data class="movie-card" href={`/movie/${movie.id}`}>
	<img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.title} />
	<div class="description">
		<h2>{movie.title}</h2>
		<p>{movie.release_date}</p>
	</div>
</a>

<style>
	a {
		text-decoration: none;
		color: black;
	}
	img {
		height: 60vh;
		width: 100%;
		object-fit: cover;
		border-radius: 1rem;
		margin-bottom: 1rem;
	}
	h2 {
		font-size: 0.9rem;
	}
	p {
		font-size: 0.7rem;
	}
	.movie-card {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 1rem;
	}
</style>
