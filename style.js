document.addEventListener('keydown', (e) => {
    const key = e.key;
    const drum = document.querySelector('[data-d='+key+']');
    const audio = document.querySelector('[data-a='+key+']');

    drum.classList.add('hit');
    setTimeout(() => {
        drum.classList.remove('hit');
    },100);

    audio.currentTime = 0;
    audio.play();
})