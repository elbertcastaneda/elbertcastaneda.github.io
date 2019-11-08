(function() {
  'strict mode';
  $('.nav-link[href^="#"],a.dropdown-item[href^="#"]', 'header').click('click', function(event) {
    var href = $(this).attr('href');
    $('main').animate({
      scrollTop: $(href).offset().top - 180
    }, 1500);
    event.preventDefault();
  });
})();