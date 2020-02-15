export default () => {

  // menu hamburger
  $('.hamburger').on('click', function () {
    $('.hamburger span').toggleClass('active');
    $('.header__aside').toggleClass('active');
    $('.header__menu').toggleClass('active')
  })

 
  // section shop (circle)
  $('.surfboard__circle').on('click', function () {
    $(this).toggleClass('active')
    
    const arrCircle = $('.surfboard__circle');

    const searchActiveElem = [...arrCircle].some(elem => elem.classList.contains('active'));
    
    searchActiveElem ? $('.shop-slider__extras').addClass('active') : $('.shop-slider__extras').removeClass('active')
  })
      /* убираем класс active на .surfboard__circle при переключении слайдера */ 
  $('.shop-slider__item .slick-arrow').on('click', function () {
    const arrCircle = $('.surfboard__circle');

    [...arrCircle].forEach(elem => {
      elem.classList.remove('active')
      $('.shop-slider__extras').removeClass('active')
    })
  })

  // прокрутка первой страницы
  $('.header__arrow-bottom').on('click', function () {
    const heightWindow = $(window).height()
    
    window.scrollBy({
      top: heightWindow,
      left: 0,
      behavior: 'smooth'
    })
  })
}