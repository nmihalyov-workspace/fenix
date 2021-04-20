if ($(window).innerWidth() < 1280) {
  $('textarea').attr('wrap', 'on');
  $('textarea').on('input', e => {
    const $this = $(e.currentTarget);
  
    $this.css('height', '5px');
    $this.css('height', ($this.prop('scrollHeight')) + 'px');
  });
}