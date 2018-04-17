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
    var main = $('#main');
    var top = sidebar.offset().top - parseFloat(sidebar.css('margin-top'));
    $(window).scroll(function (event) {
      var y = $(this).scrollTop();
      var mainbottom= parseFloat(main.prop("scrollHeight"));
      if (y >= top && y <= mainbottom) {
        sidebar.addClass('adventure-fixed');
      } else {
        sidebar.removeClass('adventure-fixed');
      }
    });
});