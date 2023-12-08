<script lang="ts">
	import '../app.scss';

	import { fly } from 'svelte/transition';
	export let data;

    import './footer.ts';

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

<div class="footer">


	<div style="grid-area: 🟩;" id="whitespace"></div>

	<div style="grid-area: 🟪;" id="About">
        <div class="Rights">
            <p>© LoglicusZ 2024, All rights reserved.</p>
        </div>
	</div>
	<div class="button-container" style="grid-area: 🟦;" id="Gallery">
        <a 
            on:click={() => scrollToTop()}
            role="button"
            href="#top"
        >
			<button  class="Top">
                <img src="../icons/arrowup.svg" class="arrow"/>
            </button>
        <a/>
	</div>
  </div>