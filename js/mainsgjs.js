/**
 * Created by sosgaa on 14-1-14.
 */
<!--jq here-->
$(document).ready(function(){
    $('#dater').datepicker();
    $('#img').css('font-size','30px');
    $('button').on('click',function(){
        $('#img2').fadeOut('slow',function(){
            $('#img3').fadeOut('slow',function(){
                $('#img4').fadeOut('slow');
            });
        });
    });
    $('#img2').click(function(){
        $('#img2').animate({width:800},"slow");
        $('#sgbody').toggle();
    });
    var fontSize=$('#img').css('font-size');
    $('<input type="button" value="toggle" id="togbtn" />').insertAfter('#disclaimer');
    $('togbtn').on('click',function(){
        $('#disclaimer').toggle();
    });

    $('p').hover(function(){
        $(this).addClass('highl',200)
    },function(){
        $(this).removeClass('highl',400)
    });

    $('.spoiler').hide();
    $('<span class="revealer">tell me!</span>').insertBefore('.spoiler');
    $('.revealer').click(function(){
        $(this).hide();
        $(this).next().fadeIn();
    });

    $('p').animate({
        padding:'30px',
        borderBottom:'4px solid #f7e1b5'
    },3000);
    $('#navsg li').hover(function(){
        $(this).animate({paddingLeft:'+=15px'},500,'swing');
    },function(){
        $(this).animate({paddingLeft:'-=15px'},500,'easeOutBounce');
    });

    $('#img4').hide().slideDown('slow').fadeOut();


});

<!--other-->