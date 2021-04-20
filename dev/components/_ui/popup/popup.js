$(document).on('click', e => {
  // hide dropdown on outer click
  if(!$(e.target).closest('.popup__dropdown').length) {
    $('.popup__dropdown').removeClass('popup__dropdown--active').find('.popup__dropdown-menu').slideUp(300);
  }
});

let topOffset = 0;

const hideOverflow = () => {
  topOffset = window.scrollY;

  $('body').css({
    position: 'fixed',
    marginTop: `${-topOffset}px`
  });
};

const showOverflow = () => {
  $('body').css({
    position: 'static',
    marginTop: '0'
  });

  window.scrollTo(0, topOffset);
};

const closePopup = (e, $this) => {
  if(!$(e.target).closest('.popup__window').length || !$this.hasClass('js-popup')) {
    showOverflow();
  
    $this.closest('.js-popup').hide(0);
	}
};

const openPopup = ($popup) => {
  hideOverflow();
  
  $popup.fadeIn(300);
};

$('body').on('click', '.js-open-popup', function (e) {
  e.preventDefault();

  const target = $(this).attr('data-popup');
  const $popup = $(`.js-popup[data-popup="${target}"]`);
  openPopup($popup);
});

$('.js-close-popup').on('click', function (e) {
  closePopup(e, $(this));
});

// application form
$('.js-form-submit').on('click', e => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const $inputs = Array.from($this.closest('form').find('input[required]'));
  let isValid = true;
  
  $inputs.map(el => {
    const $el = $(el);

    if (($(el).val() === '') ||
      ($el.attr('name') === 'dateOfBirth' && $el.val().length !== 10) ||
      ($el.attr('type') === 'tel' && $el.val().length !== 18) ||
      ($el.attr('type') === 'email' && !/(.+)@(.+){2,}\.(.+){2,}/.test($el.val()))) {
      isValid = false;
    }
  });

  closePopup(e, $this)

  if (isValid) {
    $this.closest('form').find('input').val('');
    openPopup($('.js-popup[data-popup="application-success"]'));
  } else {
    openPopup($('.js-popup[data-popup="application-failed"]'));
  }
});

// type handlers
$('.popup__dropdown').on('click', e => {
  const $this = $(e.currentTarget);

  $this.toggleClass('popup__dropdown--active');
  $this.find('.popup__dropdown-menu').slideToggle(300);
});

$('.popup__dropdown-item').on('click', e => {
  const $this = $(e.currentTarget);

  console.log($this.closest('form').find('input[type="hidden"][name="type"]'))
  console.log($this.attr('data-value'))
  $this.closest('.popup__dropdown').find('.popup__dropdown-value').text($this.text());
  $this.closest('.popup__window').find('input[type="hidden"][name="type"]').val($this.attr('data-value'));
});