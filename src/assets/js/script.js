$(function() {
    $("ul li:has(ul)").addClass("has-submenu");
    $("ul li ul").addClass("sub-menu");
    $("ul.dropdown li").hover(function () {
        $(this).addClass("hover")
    }, function () {
        $(this).removeClass("hover")
    });
    var $menu = $("#menu"), $menulink = $(".menu-trigger"), $search = $("#search"), $search_box = $(".search_box"),
        $menuTrigger = $(".has-submenu > a");
    $menulink.click(function (e) {
        $menulink.toggleClass("active");
        $menu.toggleClass("active");
        if ($search.hasClass("active")) {
            $(".menu.active").css("padding-top", "50px")
        }
    });
    $search.click(function (e) {
        e.preventDefault();
        $search_box.toggleClass("active")
    });
    $menuTrigger.click(function (e) {
        e.preventDefault();
        var t = $(this);
        t.toggleClass("active").next("ul").toggleClass("active")
    });
    $("ul li:has(ul)");
    $(function () {
        var e = $(document).scrollTop();
        var t = $(".nav_wrapper").outerHeight();
        $(window).scroll(function () {
            var n = $(document).scrollTop();
            if ($(document).scrollTop() >= 50) {
                $(".nav_wrapper").css("position", "fixed")
            } else {
                $(".nav_wrapper").css("position", "fixed")
            }
            if (n > t) {
                $(".nav_wrapper").addClass("scroll")
            } else {
                $(".nav_wrapper").removeClass("scroll")
            }
            if (n > e) {
                $(".nav_wrapper").removeClass("no-scroll")
            } else {
                $(".nav_wrapper").addClass("no-scroll")
            }
            e = $(document).scrollTop()
        })
    });



    $('.main-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: false,
        fade: true,
        arrows: false,
        cssEase: 'linear'
      });

      $('.left-arrow-main').click(function(){
        $('.main-slider').slick('slickPrev');
      })
      
      $('.right-arrow-main').click(function(){
        $('.main-slider').slick('slickNext');
      })

      
      $(document).ready(function() {
        $('.play-video').on('click', function(ev) {          
         $(this).parent().find('iframe')[0].src += "&autoplay=1";         
          ev.preventDefault();
          $(this).parent().find('iframe').addClass('d-block');
          $('.banner-image').hide();
          $('.play-video').hide();
          $('.left-arrow-main').hide();
          $('.right-arrow-main').hide();
          $('.main-slider .slick-dots').hide();
          $('.main-slider-container__item__film-banner-description').hide();         

        });
      });


      
     
});



// Init AOS
AOS.init();