const navbar = document.getElementById('navbar');
const burgerIcon = document.getElementById('burgerIcon');
const closeIcon = document.getElementById('closeIcon');

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