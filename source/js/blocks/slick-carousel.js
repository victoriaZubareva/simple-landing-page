export default () => {
  $('.header__slider').slick({
    infinite: true,
    speed: 300,
    fade: true,
    cssEase: 'linear',
    prevArrow: $('.prev-slider'),
    nextArrow: $('.next-slider'),
    asNavFor: '.slider-dots'
  });

  $('.slider-dots').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
    infinite: false
  });

  // surf - map
  $('.surf-map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.surf-slider',
    focusOnSelect: true,
  });

  // surf - slider
  $('.surf-slider').slick({
    speed: 500,
    cssEase: 'linear',
    slidesToShow: 4,
    slidesToScroll: 3,
    prevArrow: $('.prev-surf'),
    nextArrow: $('.next-surf'),
    asNavFor: '.surf-map',
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // repeat - slider (travel / sleep)
  $('.repeat-slider').slick({
    infinite: true,
    speed: 300,
    fade: true,
    cssEase: 'linear',
    prevArrow: $('.prev-repeat-slider'),
    nextArrow: $('.next-repeat-slider'),
  })

  $('.sleep-slider').slick({
    infinite: true,
    speed: 300,
    fade: true,
    cssEase: 'linear',
    prevArrow: $('.prev-sleep'),
    nextArrow: $('.next-sleep'),
  })

  // shop
  $('.shop-slider').slick({
    infinite: true,
    speed: 300,
    fade: true,
    cssEase: 'linear',
    prevArrow: $('.prev-shop'),
    nextArrow: $('.next-shop'),
  })
}

  
