<script>
	import '../app.scss';
</script>



<div class="nav">
    <div style="grid-area: 🟥;">
            <a href="./">
            <img class="logo" src="assets/navbarlogo.png" alt="LogolicusZ Logo" />
            </a>
    </div>

    <div style="grid-area: 🟩;" id="whitespace"></div>

    <div style="grid-area: 🟪;" id="About">
        <button class="about">About</button>
    </div>
    <div style="grid-area: 🟦;" id="Gallery">
        <a href="Galleryroutes/Gallery.svelte">
        <button class="gallery">Gallery</button>
        </a>
    </div>
</div>

<main>
	<slot />
</main>
