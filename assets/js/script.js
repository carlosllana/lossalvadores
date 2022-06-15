$(window).on("load", function() {
    "use strict";


    //  ============= MOBILE RESPONSIVE MENU ===============

    $(".menu-btn").on("click", function(){
      $(this).toggleClass("active");
      $(".responsive-mobile-menu").toggleClass("active");
    });

    $(".responsive-mobile-menu ul ul").parent().addClass("menu-item-has-children");
    $(".responsive-mobile-menu ul li.menu-item-has-children > a").on("click", function() {
      $(this).parent().toggleClass("active").siblings().removeClass("active");
      $(this).next("ul").slideToggle();
      $(this).parent().siblings().find("ul").slideUp();
      return false;
    });

    $("html, .menu-btn.active").on("click", function() {
      $(".responsive-mobile-menu").removeClass("active");
      $(".menu-btn").removeClass("active");
    });

    $(".menu-btn, .responsive-mobile-menu").on("click", function(e) {
      e.stopPropagation();
    });

    // CUSTOM TABS 

    $(".toggle").each(function () {
        $(this).find(".content").hide();
        $(this).find("h2:first").addClass("active").next().slideDown(500).parent().addClass("activate");
        $("h2", this).on("click touchstart", function () {
            if ($(this).next().is(":hidden")) {
                $(this).parent().parent().find("h2").removeClass("active").next().slideUp(500).removeClass("animated fadeInUp").parent().removeClass("activate");
                $(this).toggleClass("active").next().slideDown(500).addClass("animated fadeInUp").parent().toggleClass("activate");
            }
        });
    });

    // STICKY HEADER 



    $("#mask").fadeOut();


    // handle links with @href started with '#' only
    $(document).on('click', 'a[href^="#"]', function(e) {
        // target element id
        var id = $(this).attr('href');

        // target element
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }

        // prevent standard hash navigation (avoid blinking in IE)
        e.preventDefault();

        // top position relative to the document
        var pos = $id.offset().top;

        // animated top scrolling
        $('body, html').animate({scrollTop: pos});
    });




});



/*
jQuery Hover3d
=================================================
Version: 1.1.0
Author: Rian Ariona
Website: http://ariona.net
Docs: http://ariona.github.io/hover3d
Repo: http://github.com/ariona/hover3d
Issues: http://github.com/ariona/hover3d/issues
*/

(function($){
  
  $.fn.hover3d = function(options){
    
    var settings = $.extend({
      selector      : null,
      perspective   : 1000,
      sensitivity   : 20,
      invert        : false,
      shine         : false,
      hoverInClass  : "hover-in",
      hoverOutClass : "hover-out",
      hoverClass    : "hover-3d"
    }, options);
    
    return this.each(function(){
      
      var $this = $(this),
        $card = $this.find(settings.selector);
        currentX = 0;
        currentY = 0;


      if( settings.shine ){
        $card.append('<div class="shine"></div>');
      }
      var $shine = $(this).find(".shine");

      // Set perspective and transformStyle value
      // for element and 3d object
      $this.css({
        perspective: settings.perspective+"px",
        transformStyle: "preserve-3d"
      });
      
      $card.css({
        perspective: settings.perspective+"px",
        transformStyle: "preserve-3d",
      });

      $shine.css({
        position  : "absolute",
        top       : 0,
        left      : 0,
        bottom    : 0,
        right     : 0,
        transform : 'translateZ(1px)',
        "z-index" : 9
      });
      
      // Mouse Enter function, this will add hover-in
      // Class so when mouse over it will add transition
      // based on hover-in class
      function enter(event){
        $card.addClass(settings.hoverInClass+" "+settings.hoverClass);
        currentX = currentY = 0;
        setTimeout(function(){
          $card.removeClass(settings.hoverInClass);
        }, 1000);
      }
      
      // Mouse movement Parallax effect
      function move(event){
        
        var w      = $card.innerWidth(),
          h      = $card.innerHeight(),
          currentX = Math.round(event.pageX - $card.offset().left),
          currentY = Math.round(event.pageY - $card.offset().top),
          ax     = settings.invert ?  ( w / 2 - currentX)/settings.sensitivity : -( w / 2 - currentX)/settings.sensitivity,
          ay     = settings.invert ? -( h / 2 - currentY)/settings.sensitivity :  ( h / 2 - currentY)/settings.sensitivity,
          dx     = currentX - w / 2,
          dy     = currentY - h / 2,
          theta  = Math.atan2(dy, dx),
          angle  = theta * 180 / Math.PI - 90;

          
        if (angle < 0) {
          angle  = angle + 360;
        }
        

        $card.css({
          perspective    : settings.perspective+"px",
          transformStyle : "preserve-3d",
          transform      : "rotateY("+ax+"deg) rotateX("+ay+"deg)"
        });

        $shine.css('background', 'linear-gradient(' + angle + 'deg, rgba(255,255,255,' + event.offsetY / h * .5 + ') 0%,rgba(255,255,255,0) 80%)');
      }
      
      // Mouse leave function, will set the transform
      // property to 0, and add transition class
      // for exit animation
      function leave(){
        $card.addClass(settings.hoverOutClass+" "+settings.hoverClass);
        $card.css({
          perspective    : settings.perspective+"px",
          transformStyle : "preserve-3d",
          transform      : "rotateX(0) rotateY(0)"
        });
        setTimeout( function(){
          $card.removeClass(settings.hoverOutClass+" "+settings.hoverClass);
          currentX = currentY = 0;
        }, 1000 );
      }
      
      // Mouseenter event binding
      $this.on( "mouseenter", function(){
        return enter();
      });
      
      // Mousemove event binding
      $this.on( "mousemove", function(event){
        return move(event);
      });
      
      // Mouseleave event binding
      $this.on( "mouseleave", function(){
        return leave();
      });
      
    });
    
  };
  
}(jQuery));

$(".project-thumb").hover3d({
  selector: ".ban_img",
  perspective:5000
})




