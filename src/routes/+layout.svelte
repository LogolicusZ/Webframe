<script>
	import '../app.scss';

	import { fly } from 'svelte/transition';
	export let data;
</script>

<div class="nav">
	<div style="grid-area: 🟥;">
		<a href="/">
			<img class="logo" src="assets/logo1.svg" alt="LogolicusZ Logo" />
		</a>
	</div>

	<div style="grid-area: 🟩;" id="whitespace"></div>

	<div style="grid-area: 🟪;" id="About">
		<a href="/#Me">
			<button class="about">About</button>
		</a>
	</div>
	<div style="grid-area: 🟦;" id="Gallery">
		<a href="/gallery">
			<button class="gallery">Gallery</button>
		</a>
	</div>
</div>

{#key data.pathname}
	<main in:fly={{ x: -10, duration: 250, delay: 125 }} out:fly={{ x: 5, duration: 125 }}>
		<slot />
	</main>
{/key}
