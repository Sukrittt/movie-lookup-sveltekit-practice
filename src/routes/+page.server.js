import { MOVIE_DB_API_KEY } from '$env/static/private';

export async function load() {
	const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${MOVIE_DB_API_KEY}`);

	const data = await res.json();

	return {
		popular: data.results
	};
}
