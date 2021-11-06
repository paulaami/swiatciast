const burger = document.querySelector('.nav__container-menu');
const navItem = document.querySelector('.mobile-item');
const navMobile = document.querySelector('.nav__container-menu-mobile');
const fixedItem = document.querySelectorAll('.fixed-item');

const showNav = () => {
    
    navMobile.classList.toggle('show-nav');
    fixedItem.forEach(item => item.classList.toggle('show-fixed'));
    document.body.classList.toggle('lock-body-overflow');
    const mobileItems = document.querySelectorAll('.nav__link-mobile');
    
    mobileItems.forEach( item =>  {
        item.addEventListener('click', () => {
            navMobile.classList.remove('show-nav');
            fixedItem.forEach(item => item.classList.remove('show-fixed'));
        })
    })
}



const showItem = () => {

    const listItem = document.querySelector('.dropdown__menu');

    listItem.classList.toggle('show');
}

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active-color'));
    this.classList.add('active-color');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

burger.addEventListener('click', showNav);
navItem.addEventListener('click', showItem);