const burger = document.querySelector('.nav__container-menu');
const navItem = document.querySelector('.mobile-item');

const showNav = () => {
    const navMobile = document.querySelector('.nav__container-menu-mobile');
    const fixedItem = document.querySelectorAll('.fixed-item');

    navMobile.classList.toggle('show-nav');
    document.body.classList.toggle('lock-body-overflow');
    fixedItem.forEach( item => item.classList.toggle('show-fixed'));
}

const showItem = () => {
    
    const listItem = document.querySelector('.dropdown__menu');

    listItem.classList.toggle('show');
}

burger.addEventListener('click', showNav);
navItem.addEventListener('click', showItem);