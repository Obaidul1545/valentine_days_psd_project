$('.main_slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<i class="fa-solid fa-angle-left prev"></i>',
    nextArrow: '<i class="fa-solid fa-angle-right next"></i>',
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 575.99,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});
