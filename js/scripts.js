//preloader
$(window).on('load', function () {
  $('.preloader').fadeOut();
  $('.blank__bar').addClass('animate');

  var barVal = document.querySelector('.blank__bar-val');

  function printNumbersInterval(count, time) {
    var i = 1;
    var timerId = setInterval(function() {
      barVal.innerHTML = i;
      i++;
      if (i == count) {
        clearInterval(timerId);
        preloader.style.opacity = 0;
        setTimeout(function() {
          preloader.remove()
        }, 1000);
      };
    }, time / count);
  }
  printNumbersInterval(76, 2200);

  $('.input__wrp input').on('focus', function(){
    $('.input__wrp').removeClass('focus');
    $(this).parent().toggleClass('focus');
  });

  $('input[type="tel"]').mask('+7 (999) 999-99-99');

  $( ".input__wrp input" ).change(function() {
    if ($(this).val != 0) {
      $(this).parent().toggleClass('filled')
    }
  });

  $('.blank__btn').on('click', function(e) {
    e.preventDefault();
    $('body').addClass('successed');
  });
});
