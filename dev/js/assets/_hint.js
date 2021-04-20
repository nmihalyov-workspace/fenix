$('.textarea__hint, .input__hint').on('mouseenter', e => {
  $(e.currentTarget).find('[class*="hint-box"]').css('opacity', '1');
});

$('.textarea__hint, .input__hint').on('mouseleave', e => {
  $(e.currentTarget).find('[class*="hint-box"]').css('opacity', '0');
});