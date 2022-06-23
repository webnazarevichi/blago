$( document ).ready(function() {
  
    $(document).ready(function(){
        $('.sidewalk-slider__wrapper').slick({
            slidesToShow: 3,
            prevArrow: '<button type="button" class="slick-prev"><img src="assets/icons/l-arrow.svg"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="assets/icons/r-arrow.svg"></button>',
            responsive: [
                {
                  breakpoint: 769,
                  settings: {
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 575,
                  settings: {
                    slidesToShow: 2,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000
                  }
                },

              ]
        });
    });


    $(".sidewalk-slider__item_img").magnificPopup({
        type : "image",
        gallery : {
            enabled : true
        }
    });

});
