<script>
	import '../app.scss';
</script>



<div class="nav">
    <div style="grid-area: 🟥;">
        <img class="logo" src="assets/navbarlogo.png" alt="LogolicusZ Logo" />
    </div>

    <div style="grid-area: 🟩;" id="whitespace"></div>

    <div style="grid-area: 🟪;" id="About">
        <button class="about">About</button>
    </div>
    <div style="grid-area: 🟦;" id="Gallery">
        <button class="gallery">Gallery</button>
    </div>
</div>

<main>
	<slot />
</main>
