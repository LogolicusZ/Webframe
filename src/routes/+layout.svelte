<script lang="ts">
	import '../app.scss';
    import '../styles/Mobile/app-mobile.scss';
	import { onMount } from 'svelte';

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
		smoothScrollTo('section-5');
	}

	function handleKeydown(event: KeyboardEvent) {
		// Trigger redirection on Enter key or Space bar
		if (event.key === 'Enter' || event.key === ' ') {
			scrollToTop();
		}
	}


	onMount(() => {
  // check if the nav is scrolled, and if yes, add the .scrolled class
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
    // If navbar is null, the code will simply skip the interior of the if block
  });
});
</script>


<header id="navbar">
    <div class="logo-container">
        <img id="logo1" src="/assets/heyo-main.svg" alt="Heyo Logo">
        <img id="logo2" src="/logolicuszborder.svg" alt="Logo">
    </div>
    <nav>
        <ul>
            <li><a href="/#section-3">About</a></li>
			<li><a href="https://blog.logolicusz.com">Blog</a></li>
            <li class="Gallerybutton"><a href="/gallery">Gallery</a></li>
        </ul>
    </nav>
</header>

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