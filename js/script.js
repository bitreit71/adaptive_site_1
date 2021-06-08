$(document).ready(function(){
  $('.screen-2__slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    waitForAnimate: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive:[
      {
        breakpoint: 1693,
        settings: {
        slidesToShow:1
       }
      },{
        breakpoint: 1000,
        settings: {
        slidesToShow:1
       }
      }
    ],
    appendArrows:$('.screen-2__arrows')
  });
});

$(document).ready(function(){
  $(".header__burger-1").click(function(event) {
    $(".header__burger-1, .header, .header__menubar").toggleClass('active');
  }); 
});


