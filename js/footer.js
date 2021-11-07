document.addEventListener('DOMContentLoaded', function () {


 function showFooter() {
  const footer = document.querySelector('.footer');
  const policy = document.querySelector('.footer__container-policy');
  const copyrights = document.querySelector('.footer__container-copyrights');

  if (window.scrollY > 400 && window.innerWidth < 760) {
   policy.classList.add('hide');
   copyrights.classList.add('hide');
   footer.classList.add('show-footer');
  } else {
   policy.classList.remove('hide');
   copyrights.classList.remove('hide');
   footer.classList.remove('show-footer');
  }

  if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 120)) {
   policy.classList.remove('hide');
   copyrights.classList.remove('hide');
   footer.classList.remove('show-footer');
  }

  if (window.scrollY > 400 && window.innerWidth > 760) {
   footer.classList.add('show-footer');
  }
 }

 window.addEventListener('scroll', showFooter);
});
