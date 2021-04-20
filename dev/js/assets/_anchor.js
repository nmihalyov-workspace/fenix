$('.js-anchor').on('click', e => {
  e.preventDefault();

  const target = $(e.currentTarget).attr('data-target');

  if ($(window).innerWidth() < 1280) {
    $('.js-burger').trigger('click');
  }

  $('html, body').animate({
    scrollTop: $('.' + target).offset().top - 86
  }, 1000);
});