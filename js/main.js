$('.team__slider').slick({
      arrows: false,
      slidesToShow: 4,
      infinite: true,
      draggable: false,
      responsive:
         [
            {
               breakpoint: 1100,
               settings: {
                  slidesToShow: 3,
               },
            },
            {
               breakpoint: 700,
               settings: {
                  slidesToShow: 2,
               },
            },
            {
               breakpoint: 550,
               settings: {
                  slidesToShow: 1,
                  dots: true,
                  appendDots: $(".team__dots"),
               },
            },
         ]
    });

$(".team__slider-prev").on("click", function (e) {
   e.preventDefault()
   $(".team__slider").slick("slickPrev")
})

$(".team__slider-next").on("click", function (e) {
   e.preventDefault()
   $(".team__slider").slick("slickNext")
})

$('.testimonials__slider').slick({
   arrows: false,
   dots: true,
   appendDots: $(".testimonials__dots")
});

$(".testimonials__slider-prev").on("click", function (e) {
   e.preventDefault()
   $(".testimonials__slider").slick("slickPrev")
})

$(".testimonials__slider-next").on("click", function (e) {
   e.preventDefault()
   $(".testimonials__slider").slick("slickNext")
})


$(function () {
  $(".burger, .overlay").on("click", function (e) {
    e.preventDefault();
    $(".header__top").toggleClass("header__top--open");
    $(".burger").toggleClass("burger--open");
    $(".overlay").toggleClass("overlay--show");
  });

  $(".header__top a").on("click", function (e) {
    e.preventDefault();
    // плавный скролл к секции, если href — якорь
    var hash = this.hash;
    if (hash) {
      $('html, body').animate({ scrollTop: $(hash).offset().top }, 500);
    }
    // закрыть меню после клика
    $(".header__top").removeClass("header__top--open");
    $(".burger").removeClass("burger--open");
    $(".overlay").removeClass("overlay--show");
  });
});

