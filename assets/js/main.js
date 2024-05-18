document.addEventListener('scroll', () => {
    var header = document.querySelector('.navbar'); // Mengubah pemilihan elemen menjadi '.navbar'

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
