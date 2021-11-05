document.addEventListener('DOMContentLoaded', function () {


 function showFooter() {
  const footer = document.querySelector('.footer');

  if (window.scrollY > 400 && window.innerWidth > 760) {
   footer.classList.add('show-footer');
  } else {
   footer.classList.remove('show-footer');
  }

  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
   footer.classList.remove('show-footer');
  }
 }

 window.addEventListener('scroll', showFooter);
});
