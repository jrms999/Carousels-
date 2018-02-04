$(".js-carousel").on('initialized.owl.carousel translated.owl.carousel', function() {
  var defaultTiming = 5000;
  var carouselTiming = $('.owl-item.active .item').data('timing') ? $('.owl-item.active .item').data('timing') : defaultTiming;
  
  setTimeout(function(){
    $(".js-carousel").trigger('next.owl.carousel');
  }, carouselTiming);
});

$(".js-carousel").owlCarousel({
  dots: true,
  items: 1,
  loop: true,
  margin: 10,
  nav: false
});