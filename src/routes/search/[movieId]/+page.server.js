import { error } from '@sveltejs/kit';
import { MOVIE_DB_API_KEY } from '$env/static/private';

export async function load({ params }) {
	const res = await fetch(
		`https://api.themoviedb.org/3/search/movie?language=en-US&api_key=${MOVIE_DB_API_KEY}&query=${params.movieId}&page=1`
	);

	const data = await res.json();

	if (!data) throw error(404);

	return {
		movies: data.results
	};
}
