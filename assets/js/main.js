document.addEventListener('scroll', () => {
    var header = document.querySelector('.navbar'); 
    var brand = document.getElementById('navbar-logo');
    
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
        brand.src = "assets/img/png2.png"; // Ganti dengan path ke gambar logo hitam
    } else {
        header.classList.remove('scrolled');
        brand.src = "assets/img/png 1.png"; // Ganti dengan path ke gambar logo putih
    }
});



//  window.addEventListener('scroll', function () {
//             let sections = document.querySelectorAll('section');
//             let navLinks = document.querySelectorAll('.navbar-nav .nav-link');

//             let scrollPosition = window.scrollY || document.documentElement.scrollTop;

//             sections.forEach(section => {
//                 if (scrollPosition >= section.offsetTop - 70 && scrollPosition < section.offsetTop + section.offsetHeight - 70) {
//                     let currentId = section.getAttribute('id');
//                     navLinks.forEach(navLink => {
//                         navLink.classList.remove('active');
//                         if (navLink.getAttribute('data-section') === currentId) {
//                             navLink.classList.add('active');
//                         }
//                     });
//                 }
//             });
//         });