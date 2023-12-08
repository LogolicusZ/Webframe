import { onMount } from 'svelte';

  let emoji = '';

  onMount(() => {
    const emojis = ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣"];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    emoji = randomEmoji;

    const backToTopButton = document.querySelector('.back-to-top');

    if (backToTopButton) {
      backToTopButton.addEventListener('click', function() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  });