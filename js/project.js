$(function(){
    $('.img-sleder').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

      (function($) { 
   
        function thmbxSlider() {
            if ($('.testimonials-slider').length) {
                $('.testimonials-slider').bxSlider({
                    // adaptiveHeight: true,
                    auto: true,
                    controls: true,             
                    pause: 5000,
                    speed: 500,
                    pager: true,
                    pagerCustom: '.pager-one, .pager-two'
                });
            }
        }
    
      
        $(window).on('load', function() {
           
            thmbxSlider();
        });
    
    })(jQuery);
});

var swiper = new Swiper('.swiper-container' , {
    effect:'coverflow',
    grabCursor:true,
    slidesPerView:"auto",
    coverflowEffect:{
        rotate: 0,
        stretch:0,
        depth:100,
        modifier:2,
        slideShadows:true,
    },
   lopp: true,
})