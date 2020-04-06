$(document).ready(function(){
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        direction: 'vertical',
        paginationClickable: true,
        autoplay: 3000,
        loop: false,
    });
});

$(window).on('load',function(){

//     // Initialize

    $( "#fullpage" ).fullpage();
//     $( ".float_window" ).hide();
    
//     $( "#close_window, .dark_mask" ).click( function() {
//         float_window();
//     });

//     $(".not_yet").each(function() {
//         autoAdjust($(this));
//     });
    
    
//     // Activity 的顯示控制

//     function float_window () {
//         if ( window_status == 'closed' ) {
//             $( ".float_window" ).show();
//             $( "#fullpage, .cover" ).animate({opacity: 0.1}, 100, function() {
//                 window_status = 'open';
//                 $( '.float_window' ).animate({opacity: 1}, 500);
//             });
//         }
//         else if ( window_status == 'open' ) {
//             $("#fullpage").animate({opacity: 1}, 500);
//             $(".cover").animate({opacity: 0.3}, 500);
//             $( ".float_window" ).animate({opacity: 0}, 500, function() {
//                 window_status = 'closed';
//                 $( ".float_window" ).hide();
//             });
//         }
//     }


//     // 自動調整圖片大小

//     function autoAdjust( outer_div ) {
//         var inner_pic_size = outer_div.children("img").css("width").replace("px","") / outer_div.children("img").css("height").replace("px","") ;
//         var outer_div_size = outer_div.css("width").replace("px","") / outer_div.css("height").replace("px","") ;
//         if ( inner_pic_size > outer_div_size ) {
//             outer_div.addClass("fat");
//             outer_div.removeClass("not_yet");
//         }
//         else if ( inner_pic_size <= outer_div_size ) {
//             outer_div.addClass("tall");
//             outer_div.removeClass("not_yet");
//         }
//     }

});
