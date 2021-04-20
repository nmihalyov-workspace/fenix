Array.from($('input[type="tel"]')).map(el => {
  IMask(el, {
    mask: '+{7} (000) 000-00-00'
  });
});

Array.from($('input[name*="date"]')).map(el => {
  IMask(el, {
    mask: Date
  });
});