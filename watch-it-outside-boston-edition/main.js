(function() {
  'strict mode';
  $('a.nav-link[href^="#"]:not([href="#"]),a.dropdown-item[href^="#"]', 'header').click('click', function(event) {
    var href = $(this).attr('href');
    var $section2Scroll = $(href);
    var $main = $('main');
    var sectionTop = $section2Scroll.offset().top - 180;
    var currentScroll = $main.scrollTop();
    var moveScrollStopTo = sectionTop + currentScroll;

    $('.navbar-collapse').collapse('hide');

    $main.animate({
      scrollTop: moveScrollStopTo
    }, Math.abs(currentScroll -  moveScrollStopTo), () => {
    });
    // event.preventDefault();
  });

  function leftSlide(tab){
    var $tab = $(tab);
    $tab.removeClass('animated slideInRight');
    $tab.addClass('animated slideInLeft');
  }

  function rightSlide(tab){
    var $tab = $(tab);
    $tab.removeClass('animated slideInLeft');
    $tab.addClass('animated slideInRight');
  }

  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      var url = String(e.target);
      var $fromTarget = $(e.relatedTarget);
      var $toTarget = $(e.target);
      var fromDayEvent = Number($fromTarget.attr('id').replace(/(movies-)|(th-tab)/g, ''));
      var toDayEvent = Number($toTarget.attr('id').replace(/(movies-)|(th-tab)/g, ''));
      console.log(fromDayEvent, toDayEvent);
      var tab = $(this).attr('href');

      if (fromDayEvent < toDayEvent){
        rightSlide(tab);
        console.log('left => right');
      } else {
        console.log('right => left');
        leftSlide(tab);
      }
  })
})();