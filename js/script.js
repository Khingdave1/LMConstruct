const navList = document.querySelector('.nav-list');
const toggleMenu = document.querySelector('.toggle-menu');

toggleMenu.addEventListener('click', () => {
    navList.classList.toggle('open-menu');
    toggleMenu.classList.toggle('open-menu');
});
