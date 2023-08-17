import { error } from '@sveltejs/kit';
import { MOVIE_DB_API_KEY } from '$env/static/private';

export async function load({ params }) {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${params.movieId}?language=en-US&api_key=${MOVIE_DB_API_KEY}`
	);

	const movie = await res.json();

	if (!movie) throw error(404);

	return {
		movie
	};
}
