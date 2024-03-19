$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:5,
        responsiveClass:true,
        
        responsive:{
            0:{
                center: true,
                items:2,
                margin:5,
                nav:false
            },
            800:{
                center: true,
                items:2,
                margin:5,
                nav:false
            },
            900:{
                center: true,
                items:2,
                margin:5,
                nav:false
            },
            1000:{
                center: true,
                items:1,
                nav:false
            }
        }
    })
    
  });





  $("#owl-demo2").owlCarousel({
    items: 3,
    itemsDesktop: [1199,4],
    itemsDesktopSmall: [979,4],
    itemsMobile: [479,4],
});
