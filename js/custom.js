jQuery(document).ready(function(){

  // Include files
  $('.include-me').each(function(){
    $(this).load($(this).data('location'));
  });

  //============================== MENU SCROLL =========================
   $(window).load(function(){
    $('.body-wrapper').each(function(){
      var header_area = $('.header-wrapper');
      var main_area = header_area.children('.navbar');

      var logo = main_area.find('.navbar-header');
      var navigation = main_area.find('.navbar-collapse');
      var original = {
        nav_top: navigation.css('margin-top')
      };

      $(window).scroll(function(){
        if( main_area.hasClass('bb-fixed-header') && ($(this).scrollTop() == 0 || $(this).width() < 750)){
          main_area.removeClass('bb-fixed-header').appendTo(header_area);
          navigation.animate({'margin-top': original.nav_top}, {duration: 300, queue: false, complete: function(){
            header_area.css('height', 'auto');
          }});
        }else if( !main_area.hasClass('bb-fixed-header') && $(this).width() > 750 &&
          $(this).scrollTop() > header_area.offset().top + header_area.height() - parseInt($('html').css('margin-top')) ){

          header_area.css('height', header_area.height());
          main_area.css({'opacity': '0'}).addClass('bb-fixed-header');
          main_area.appendTo($('body')).animate({'opacity': 1});

          navigation.css({'margin-top': '0px'});
        }
      });
    });

    $(window).trigger('resize');
    $(window).trigger('scroll');
  });

//============================== MENU DROPDOWN ON HOVER =========================
  $('.nav .dropdown').hover(function() {
    $(this).addClass('open');
  },
  function() {
    $(this).removeClass('open');
  }
  );


//============================== Rs-Slider =========================
  jQuery('.bannercontainer .fullscreenbanner').revolution({
   delay: 5000,
   startwidth: 1170,
   startheight: 560,
   fullWidth: "on",
   fullScreen: "off",
   hideCaptionAtLimit: "",
   dottedOverlay: "twoxtwo",
   navigationStyle: "preview4",
   fullScreenOffsetContainer: "",
   hideTimerBar:"on",

  });

  jQuery('.bannercontainer .fullscreenbanner').revolution({
    delay: 5000,
    startwidth: 1170,
    startheight: 500,
    fullWidth: "on",
    fullScreen: "on",
    hideCaptionAtLimit: "",
     dottedOverlay: "twoxtwo",
    navigationStyle: "preview4",
    fullScreenOffsetContainer: "",
    hideTimerBar:"on",
  });

//============================== COUNTER-UP =========================
  $(document).ready(function ($) {
    $('.counter').counterUp({
      delay: 10,
      time: 2000
    });
  });

  //============================== BACK TO TOP =========================
    $(document).ready(function(){
      $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
          $('#backToTop').css("opacity", 1);
        } else {
          $('#backToTop').css("opacity", 0);
        }
      });
    });

  //============================== SMOOTH SCROLLING TO SECTION =========================
  $(document).ready(function () {
    $('.scrolling  a[href*="#"]').on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var target = $(this).attr('href');
      $(target).velocity('scroll', {
        duration: 800,
        offset: -150,
        easing: 'easeOutExpo',
        mobileHA: false
      });
    });
  });

//============================== ACCORDION OR COLLAPSE ICON CHANGE =========================

    var allIcons = $("#faqAccordion .panel-heading i.fa");
    $('#faqAccordion .panel-heading').click(function(){
      allIcons.removeClass('fa-chevron-down').addClass('fa-chevron-up');
      $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });

    var allIconsOne = $("#accordionOne .panel-heading i.fa");
    $('#accordionOne .panel-heading').click(function(){
      allIconsOne.removeClass('fa-chevron-down').addClass('fa-chevron-up');
      $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });

    var allIconsTwo = $("#accordionTwo .panel-heading i.fa");
    $('#accordionTwo .panel-heading').click(function(){
      allIconsTwo.removeClass('fa-chevron-down').addClass('fa-chevron-up');
      $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });

    var allIconsThree = $("#togglesOne .panel-heading i.fa");
    $('#togglesOne .panel-heading').click(function(){
      allIconsThree.removeClass('fa-chevron-down').addClass('fa-chevron-up');
      $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });

    var allIconsFour = $("#togglesTwo .panel-heading i.fa");
    $('#togglesTwo .panel-heading').click(function(){
      allIconsFour.removeClass('fa-chevron-down').addClass('fa-chevron-up');
      $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });

});
