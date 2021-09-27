$(document).ready(function () {
  $(".carousel").slick({
    mobileFirst: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3200,
    responsive: [
      {
        breakpoint: 374,
        settings: {
          arrows: true,
          prevArrow:
            '<button type="button" class="slide-arrow slick-prev">&#8592; POPRZEDNIA</button>',
          nextArrow:
            '<button type="button" class="slide-arrow slick-next">NASTĘPNA &#8594;</button>',
        },
      },
    ],
  });
});
