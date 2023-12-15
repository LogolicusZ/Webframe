<script lang="ts">
	import '../app.scss';
    import '../styles/Mobile/app-mobile.scss';

	import { fly } from 'svelte/transition';
	export let data;

	function smoothScrollTo(elementId: string) {
		const element = document.getElementById(elementId);
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth'
			});
		}
	}

	function scrollToTop() {
		// goto('/');
		smoothScrollTo('section-1');
	}

	function handleKeydown(event: KeyboardEvent) {
		// Trigger redirection on Enter key or Space bar
		if (event.key === 'Enter' || event.key === ' ') {
			scrollToTop();
		}
	}
</script>
<div class="nav-container">
    <div class="nav">
        <div class="nav-logo">
            <a href="/">
                <img class="logo" src="assets/logo1.svg" alt="LogolicusZ Logo" />
				<img class="logodark" src="assets/logodark.svg" alt="LogolicusZ Logo" />
            </a>
        </div>
        <div class="nav-items">
            <a href="/#section-3">
                <button class="about">About</button>
            </a>
            <a href="/gallery">
                <button class="gallery">Gallery</button>
            </a>
        </div>
    </div>
</div>

{#key data.pathname}
	<main in:fly={{ x: -10, duration: 250, delay: 125 }} out:fly={{ x: 5, duration: 125 }}>
		<slot />
	</main>
{/key}

<div class="Footer-container">
	<div class="footer">
		<p class="rights">&copy; LogolicusZ 2023-2024, All rights reserved.</p>
		<div class="button-container">
			<a on:click={() => scrollToTop()} role="button" href="#top">	
				<button class="Btn">
	
					<div class="arrow-up"><img src="../icons/arrowup.svg" class="arrow" alt="arrow-up" /></div>
					
					<div class="text-top">Top</div>
				</button>
			</a>
		</div>
	</div>
</div>