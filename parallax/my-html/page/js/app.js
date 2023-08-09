const navbar = document.getElementById('navbar');
const header = document.getElementById('container-fluid');
const burgerIcon = document.getElementById('burgerIcon');
const closeIcon = document.getElementById('closeIcon');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


burgerIcon.addEventListener('click', () => {
    navbar.classList.add('show');
    burgerIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
});

closeIcon.addEventListener('click', () => {
    navbar.classList.remove('show');
    burgerIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
});


const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});


