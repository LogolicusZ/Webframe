<script lang="ts">
	import { onMount } from 'svelte';
	import { afterUpdate } from 'svelte';

	function rand(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	onMount(() => {
		document.getElementById('banner').src = document
			.getElementById('banner')
			.src.replace('pic0.png', `pic${rand(1, 10)}.png`);
		console.log(document.getElementById('banner').src);
	});
</script>	

<body>
	<section id="section-2">
		<div class="Text-container">
			<div class="Text">
				<div id="Picture">
					<a href="/gallery" class="banner" data-tooltip="See more...">
						<img src="/assets/img/pic0.png" id="banner" alt="Random picture from the gallery." />
					</a>
				</div>
				<div class="text-container">
					<p class="text-2">
						When I am not taking photos or painting, I enjoy studying frontend development and
						designing.
					</p>
				</div>
			</div>
		</div>
	</section>
</body>

<style lang="scss">
	@import '../app.scss';
	@import '../styles/text.scss';
	@import '../styles/Mobile/text-mobile.scss';
</style>
