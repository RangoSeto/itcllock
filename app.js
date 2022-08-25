$(document).ready(function(){
    // Start Header Section
    // $(window).scroll(function(){
    //     var getscrolltop = $(this).scrollTop();
    //     // console.log(getscrolltop);

    //     if(getscrolltop > 287){
    //         $(".fquotebar").css('position','fixed');
    //     }
    // });
    // End Header Section

    $("#lightSlider").lightSlider({
        item: 5,
        slideMove: 1,
        slideMargin: 100,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ]

    });

    $("#testimonials").lightSlider();
});