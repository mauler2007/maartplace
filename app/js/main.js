$(function(){

    $(".slider__data-rating,.feed-slider__item-rating ").rateYo({
        rating: 4.6,
        readOnly: true,
        starWidth: "16px"
        
    });

    $('.slider__box').slick({
        
        prevArrow:'<button class="slick-arrow slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
        nextArrow:'<button class="slick-arrow slick-next"><span class="lnr lnr-chevron-right"></span></button>',
    });

    $('.feed-slider__items').slick({
        arrows:false,
        slidesToShow: 3,
        slidesToScroll:3
    });


  
    // $(".feed-slider__data-rating").rateYo({
    //     rating: 4.6,
    //     readOnly: true,
    //     starWidth: "16px"
        
    // });
    
    
 





    var mixer = mixitup('.products__inner-box');
});