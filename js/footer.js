document.addEventListener('DOMContentLoaded', function () {


 function showFooter() {
  const footer = document.querySelector('.footer');
  const policy = document.querySelector('.footer__container-policy');
  const copyrights = document.querySelector('.footer__container-copyrights');

  const toggleFooter = () => {
   footer.classList.remove('show-footer');
   policy.classList.remove('hide');
   copyrights.classList.remove('hide');
  }

  if (window.scrollY > 400 && (window.scrollY <= document.body.offsetHeight - 1000) && window.innerWidth < 760) {
   policy.classList.add('hide');
   copyrights.classList.add('hide');
   footer.classList.add('show-footer');
  } else {
   toggleFooter();
  }

  // if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
  //  toggleFooter();
  // }

  if (window.scrollY > 400 && window.innerWidth > 760) {
   footer.classList.add('show-footer');
  }
  console.log(document.body.offsetHeight)
  console.log(window.scrollY)
 }

 window.addEventListener('scroll', showFooter);
});
