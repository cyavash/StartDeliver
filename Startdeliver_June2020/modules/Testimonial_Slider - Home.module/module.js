jQuery(document).ready(function($) {
      $('.customer-carousel').slick({
        dots: true,
        autoplay: true,
        arrows: false,
        centerMode: true,
        slidesToShow: 1,
        centerPadding: '25%', 
        responsive: [
        {
          breakpoint: 700,
          settings: {
            centerMode: true,
            centerPadding: '50px'
          }
        }]
    });
});