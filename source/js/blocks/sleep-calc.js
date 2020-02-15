export default () => {
  $('<div class="quantity-button quantity-up"></div><div class="quantity-button quantity-down"></div>').insertAfter('.quantity input');
  
  $('.quantity').each(function () {
    let spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function () {
      let oldValue = parseFloat(input.val());
      let newVal = null;
      if (oldValue >= max) {
        newVal = oldValue;
      } else {
        newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      let oldValue = parseFloat(input.val());
      let newVal = null;
      if (oldValue <= min) {
        newVal = oldValue;
      } else {
        newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });

  let summ = ($('.quantity-guests').val() * $('.quantity-sum').data('nights')) * $('.quantity-nights').val();
  $('.quantity-sum').html(`$${summ} USD`);

  $('.quantity').on('click', function() {
    let current = $(this);
    let nights = null;
    let guests = null;

    let currentVal = current.find('input[type="number"]').val();
    let currentClass = current.find('input[type="number"]')[0].className;

    if (currentClass === 'quantity-nights') {
      nights = currentVal;
      guests = current.parents('.repeat-slider__info').children().find('.quantity-guests').val();
    } else if (currentClass === 'quantity-guests') {
      guests = currentVal;
      nights = current.parents('.repeat-slider__info').children().find('.quantity-nights').val();
    }  
    
    let summ = guests * $('.quantity-sum').data('nights') * nights;
    $('.quantity-sum').html(`$${summ} USD`);

  })

  $('.slider-arrow').on('click', function() {
    $('.quantity-sum').html(`$${summ} USD`);
  })
}