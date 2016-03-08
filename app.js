var main = function () {
 
    
    $('.navbtnS').click(function(){
        console.log("navS click");
        $('.navhide').hide();
        $('.society').show();
    })
    
    $('.navbtnE').click(function(){
        console.log("navE click");
        $('.navhide').hide();
        $('.events').show();
    })
    
    $('.navbtnP').click(function(){
        console.log("navP click");
        $('.navhide').hide();
        $('.people').show();
    })

    
};

$(document).ready(main);