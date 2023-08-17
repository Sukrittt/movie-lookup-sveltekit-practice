<script>
	import Navbar from '../components/Navbar.svelte';
	import '../globals.css';
</script>

<svelte:head>
	<title>Movie Lookup</title>
</svelte:head>

<main>
	<Navbar />
	<slot />
</main>
