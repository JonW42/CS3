var main = function () {
 
    
    $('.navbtnS').click(function(){
        $('.navhide').fadeOut("fast");
        $('.society').fadeIn("slow");
    })
    
    $('.navbtnE').click(function(){
        $('.navhide').fadeOut("fast");
        $('.events').fadeIn("slow");
    })
    
    $('.navbtnP').click(function(){
        $('.navhide').fadeOut("fast");
        $('.people').fadeIn("slow");
    })
    
    $('.navbtnC').click(function(){
        $('.navhide').fadeOut("fast");
        $('.contact').fadeIn("slow");
    })

    
};

//**not working** code i stole from here: http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links
var idAnime = function() {
          $('a[href*=#]').each(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            && location.hostname == this.hostname
            && this.hash.replace(/#/,'') ) {
              var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
              var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
               if ($target) {
                 var targetOffset = $target.offset().top;
                 $(this).click(function() {
                   $('html, body').animate({scrollTop: targetOffset}, 4000);
                   return false;
                 });
              }
            }
          });
        };


$(document).ready(main);
