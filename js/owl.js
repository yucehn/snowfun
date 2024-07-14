$('.owl-carousel-coach').owlCarousel({
  loop:true,
  margin: 12,
  autoplay: true,
  nav:false,
  dots:false,
  center: true,
  responsive:{
      0:{
        items:1.5,
        center: false,
      },
      576:{
        items:2.5,
        center: false,
      },
      992:{
        items:3.5
      },
      1200:{
        items:4.5
      },
      1400:{
        items:5.5
    }
  }
});

jQuery(document).ready(function ($) {
  let slider = $(".owl-carousel-strategy");
  slider.each(function () {
    $(".owl-carousel-strategy").owlCarousel({
      nav: true,
      loop: false,
      dots: false,
      pagination: false,
      margin: 25,
      autoHeight: false,
      stagePadding: 50,
      responsive: {
        0: {
          items: 1.3,
          stagePadding: 0,
          margin: 10,
        },
        470: {
          items: 1.8,
          stagePadding: 10,
        },
        640: {
          items: 2.1,
          stagePadding: 20,
        },
        767: {
          items: 2.5,
          stagePadding: 20,
        },
        1024: {
          items: 3.5,
          stagePadding: 20,
        },
        1440: {
          items: 4.5,
          stagePadding: 20,
        }
      },
    });

    $('.strategy .owl-nav').hide();
    $('.owl-carousel-strategy').hover(
      function() {
        // 滑鼠進入時顯示按鈕
        $('.strategy .owl-nav').show();
      },
      function() {
        // 滑鼠離開時隱藏按鈕
        $('.strategy .owl-nav').hide();
      }
    );
  });
});
