// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}











(function(){
  "use strict";


$(function ($) {

    //Detecting viewpot dimension
     var vH = $(window).height();
     var vW = $(window).width();
     //Adjusting Intro Components Spacing based on detected screen resolution
     $('#intro, .full-height').css('height',vH);
     $('.full-width').css('width',vW);
     $('.half-height').css('height',vH/2);
     $('.rs-bg-img').css('max-height',vH);
     $('.rs-bg-img').css('max-width',vW);

    

$(document).ready(function() {

     var folioThumbHeight;
     $('.folio-thumb').each(function() {
      folioThumbHeight = $(this).height();
      $(this).find('.item_info').css('height',folioThumbHeight+3);
     });
   
   
  if(vW > 1000)
  {
   var maxHeight = -1;

   $('.equal-height-one').each(function() {
     maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
   });

   $('.equal-height-one').each(function() {
     $(this).height(maxHeight);
   });

}

 });

//Preloader
    $("#status").fadeOut();
    // will fade out the whole DIV that covers the website.
    $("#preloader").delay(1000).fadeOut(1000);
    $('body').removeClass('preloader-running');
    $('body').addClass('preloader-done');
    $("#ajax-content").delay(1000).css('opacity', '1');
    


        //Mobile Only Navigation (multi level)
        $('ul.slimmenu').slimmenu({
            resizeWidth: '1200',
            collapserTitle: '',
            easingEffect: 'easeInOutQuint',
            animSpeed: 'medium',
        });

        $('.slimmenu li a').on('click',function(){
                    $('ul.slimmenu').removeClass('expanded').slideUp();
        })



//Text Ticker
 $(window).load(function(){
        $('.text-rotator').each(function(){
            
            var text_rotator_content = $(this).html();
            $(this).empty();
            $(this).html('<div class="rotator-wrap"></div>')
            var this_item = $(this).children('.rotator-wrap');
            var text_rotator_content_split = text_rotator_content.split(',');
            var item_size = text_rotator_content_split.length;
            nova_text_rotator(text_rotator_content_split, this_item, item_size);
        });
        
        function nova_text_rotator(item_array, this_item, item_size, my_index){
            
            if(my_index == undefined)
                var my_index = -1;

            my_index++

            if(my_index < item_size)
            {

                this_item.fadeOut(800, function(){
                    this_item.html('<span>'+ item_array[my_index] +'</span>');
                    this_item.fadeIn(800);
                    
                });
            }
            else
            {
                my_index = -1;
            }

            setTimeout(function() {
                 nova_text_rotator(item_array, this_item, item_size, my_index);
            }, 2500);
        }
    });  

    //Features Switching - State Change
    $('.features-icon').click(function(){
          $('.features-icon').removeClass('current');
          $(this).addClass('current');
    })


    //Parallax
    

if( !device.tablet() && !device.mobile() ) {

        /* if non-mobile device is detected*/ 
              // Parallax Init
              $('.parallax').each(function() {
                    $(this).parallax('0', -0.3, true);
                });
                        
        } else {
            
            /* if mobile device is detected*/ 
            $('.slide').addClass('parallax-off');
        }




    //Venobox Responsive Lightbox
    $('.venobox, .image-lightbox-link').venobox({
    numeratio: true
    }); 

        //Portfolio Engine
    $('#grid').mixitup({
      transitionSpeed : 200
    });



    //Portfolio Filter Active State
    $('ul#portfolioFilter li').click(function(){
      $('ul#portfolioFilter li').removeClass('active-filter');
      $(this).addClass('active-filter');
    });


    //Highlight the navigation on focusing a section
   $('.standard-nav li > a').click(function(){
        $('.standard-nav li > a').removeClass('highlighted');
        $(this).addClass('highlighted');
    });
    $('.page, .intro').mouseenter(function(){
        var sectionId = $(this).attr('id');
        $('.standard-nav li > a').removeClass('highlighted');
        $('#'+sectionId+'-linker').addClass('highlighted');
    });

    //Setup waypoints plugin
		$('.page').first().waypoint(function (event, direction) {

			//If the user scrolls up change the navigation link that has the same data-slide attribute as the slide to active and 
			//remove the active class from the previous navigation link 
			if (direction === 'down') {
			  $('.standard-header').slideDown();
			}
			// else If the user scrolls down change the navigation link that has the same data-slide attribute as the slide to active and 
			//remove the active class from the next navigation link 
			else {
			  $('.standard-header').slideUp();
			}

		}, { offset: 1000 });


});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







  

