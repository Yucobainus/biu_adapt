const body = document.querySelector('body');
const openMenuBtn = document.querySelector('.header__menu-btn')
const closeMenuBtn = document.querySelector('.header-menu__close-btn')


openMenuBtn.addEventListener('click', () => {
    body.classList.add('header-menu_active')
})
closeMenuBtn.addEventListener('click', () => {
    body.classList.remove('header-menu_active')
})
