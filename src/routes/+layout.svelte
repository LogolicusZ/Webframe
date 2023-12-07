<script>
	import '../app.scss';
</script>



<div class="nav">
    <div style="grid-area: 🟥;">
            <a href="/">
            <img class="logo" src="assets/logo1.svg" alt="LogolicusZ Logo" />
            </a>
    </div>

    <div style="grid-area: 🟩;" id="whitespace"></div>

    <div style="grid-area: 🟪;" id="About">
        <a href="/#about">
            <button class="about">About</button>
        </a>
    </div>
    <div style="grid-area: 🟦;" id="Gallery">
        <a href="/gallery">
            <button class="gallery">Gallery</button>
        </a>
    </div>
</div>

<main>
	<slot />
</main>
