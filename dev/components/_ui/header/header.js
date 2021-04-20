$('.js-burger').on('click', e => {
  $(e.currentTarget).toggleClass('header__burger--active');

  $('.header__menu').toggleClass('header__menu--active');

  if ($('.header__menu').hasClass('header__menu--active')) {
    hideOverflow();
  } else {
    showOverflow();
  }
});