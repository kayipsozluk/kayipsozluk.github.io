// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});


$(function () {
    var sidebar = $('#sidebar');
    var main = $('#lolo');
    var top = sidebar.offset().top - parseFloat(sidebar.css('margin-top'));
    var mainbottom= main.prop("scrollHeight");//parseFloat(main.css('height'));
    $(window).scroll(function (event) {
      var y = $(this).scrollTop();
      if (y >= top) {
        sidebar.addClass('adventure-fixed');
        console.info("mainbottom:"+mainbottom+" top:"+top+" y:"+y);
      } else {
        sidebar.removeClass('adventure-fixed');
      }
    });
});