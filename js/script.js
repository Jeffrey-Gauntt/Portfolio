$(document).ready(function() {
    $('#slides').superslides({
        animation: "fade",
        play: 3000,
        pagination: false
    });

    var typed = new Typed('.typed', {
        strings: ["Web Developer", "and a Cool Guy"],
        typeSpeed: 150,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    Fancybox.bind("[data-fancybox]", {
        // Your options go here
      });
    
      $(".items").isotope({
          filter: '*',
          animationOptions: {
              duration: 1500,
              easing: 'linear',
              queue: false
          }
      });

      $(".filters a").click(function() {

          $(".filters .current").removeClass("current");
          $(this).addClass("current");

          let selector = $(this).attr("data-filter");

          $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;
      });
});