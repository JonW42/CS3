var main = function () {
 
    
    $('.navbtnS').click(function(){
        console.log("navS click");
        $('.navhide').fadeOut("fast");
        $('.society').fadeIn("slow");
    })
    
    $('.navbtnE').click(function(){
        console.log("navE click");
        $('.navhide').fadeOut("fast");
        $('.events').fadeIn("slow");
    })
    
    $('.navbtnP').click(function(){
        console.log("navP click");
        $('.navhide').fadeOut("fast");
        $('.people').fadeIn("slow");
    })
    
    $('.navbtnC').click(function(){
        console.log("navC click");
        $('.navhide').fadeOut("fast");
        $('.contact').fadeIn("slow");
    })

    
};

$(document).ready(main);