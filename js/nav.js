const burger = document.querySelector('.nav__container-menu');

const showNav = () => {
    const navMobile = document.querySelector('.nav__container-menu-mobile');
    const fixedItem = document.querySelectorAll('.fixed-item');

    navMobile.classList.toggle('show-nav');
    document.body.classList.toggle('lock-body-overflow');
    fixedItem.forEach( item => item.classList.toggle('show-fixed'));
}

burger.addEventListener('click', showNav);