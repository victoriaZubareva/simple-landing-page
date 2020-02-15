// -- связываем слайдер с svg анимацией --

export default () => {
  $('.header__arrows, .slider-item__info').on('click', function() {
     let currentElem = $('.slider-dots .slick-current');
     let animationDelay = '0s'; // убираем задержку анимации как у первого элемента

    $('.header__map-line').each(function() {
      $(this).removeClass('header__map-line-active')
    })

    if (currentElem.hasClass('dots-south')) {
      $('.map-line-south').addClass('header__map-line-active')
      $('.map-line-south').css({  
        'animation-delay' : animationDelay  
      })
    }

    if (currentElem.hasClass('dots-north')) {
      $('.map-line-north').addClass('header__map-line-active')
      $('.map-line-north').css({  
        'animation-delay' : animationDelay  
      })
    }

    if (currentElem.hasClass('dots-west')) {
      $('.map-line-west').addClass('header__map-line-active')
      $('.map-line-west').css({  
        'animation-delay' : animationDelay  
      })
    }

    if (currentElem.hasClass('dots-east')) {
      $('.map-line-east').addClass('header__map-line-active')
      $('.map-line-east').css({  
        'animation-delay' : animationDelay  
      })
    }
  })
}