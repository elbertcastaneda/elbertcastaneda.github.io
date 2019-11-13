(function() {
  'strict mode';
  function clickSubMenu(href) {
    var $href = $("[href='"+ href +"'][role='tab']");

    // Trigger click show tab and refresh spy scroll
    $href.trigger('click');

    scrollToHref(href);
  }

  function scrollToHref (href) {
    var $section2Scroll = $(href);
    if (href.indexOf("#movies") == 0) {
      $section2Scroll = $('[id^="movies-"]:visible');
    }

    var $main = $('main');
    var sectionTop = $section2Scroll.offset().top - 180;
    var currentScroll = $main.scrollTop();
    var moveScrollStopTo = sectionTop + currentScroll;

    $('.navbar-collapse').collapse('hide');
    console.info(moveScrollStopTo)
    $main.animate({
      scrollTop: moveScrollStopTo
    }, Math.abs(currentScroll -  moveScrollStopTo));
  }

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

  if (location.hash && location.hash.indexOf("#movies-") === 0) {
    clickSubMenu(location.hash);
  }

  $('a.nav-link[href^="#"]:not([href="#"]),a.dropdown-item[href^="#"]', 'header')
    .click('click', function(event) {
      var href = $(this).attr('href');
      clickSubMenu(href);
    });

  $('a[data-toggle="tab"]')
    .on('shown.bs.tab', function (e) {
        var url = String(e.target);
        var $fromTarget = $(e.relatedTarget);
        var $toTarget = $(e.target);
        var fromDayEvent = Number($fromTarget.attr('id').replace(/(movies-)|(th-tab)/g, ''));
        var toDayEvent = Number($toTarget.attr('id').replace(/(movies-)|(th-tab)/g, ''));
        // console.log(fromDayEvent, toDayEvent);
        var tab = $(this).attr('href');

        if (fromDayEvent < toDayEvent){
          rightSlide(tab);
          // console.log('left => right');
        } else {
          // console.log('right => left');
          leftSlide(tab);
        }
        setTimeout(function() {
          var $main = $('main');
          $main.scrollTop($main.scrollTop() - 50);
          $main.scrollTop($main.scrollTop() + 50);
          $('main[data-spy="scroll"]').scrollspy('refresh');
        }, 200);
    });
})();