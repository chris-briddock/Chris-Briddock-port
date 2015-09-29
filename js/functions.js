$( document ).ready(function() {
  $('li a').click(function() {
    $('.nav').toggleClass('has-opacity');
    $('#nav-icon').toggleClass('open');
  });
  // mobile navigation below
  $('#nav-icon').click(function() {
    $(this).toggleClass('open');
    $('.nav').toggleClass('has-opacity');
    /* checks if nav has the class has-opacity, pointer events
     fixes the fact you can click on links even though the menu isn't open */
    if ($('.nav').hasClass('has-opacity')) {
      $('.nav a').css('pointer-events', 'all');
    }
    else {
      $('nav a').css('pointer-events', 'none');
    }
});
  // chevron scroll down
  $('.chevron-down').click(function() {
    $('html, body').animate({
      scrollTop: $('#services').offset().top
    },1200)
  });
  // links scroll down start
  $('#about-link').click(function() {
    $('html, body').animate({
      scrollTop: $('#about').offset().top
    },1200)
  });
  $('#port-link').click(function() {
    $('html, body').animate({
      scrollTop: $('#behance').offset().top
    },1200)
  });
  $('#contact-link').click(function() {
    $('html, body').animate({
      scrollTop: $('#contact').offset().top
    },1200)
  });


// on scroll add class animated fadeIn to #about section
var scroll_start = 0;
var startchange = $('#about');
var offset = startchange.offset();
$(document).scroll(function() {
  scroll_start = $(this).scrollTop();
  if (scroll_start > offset.top ) {
    $('#about').addClass('fadeIn animated')
}
else {
  $('#about').addClass('fadeIn animated')
}
});
// on scroll adds class important-white to mobile navigation
var scroll_start = 0;
var startchange = $('#behance');
var offset = startchange.offset();
$(document).scroll(function() {
  scroll_start = $(this).scrollTop();
  if (scroll_start > offset.top ) {
    $('span').addClass('important-white');
}
  else {
    $('span').removeClass('important-white');
}
});

var scroll_start = 0;
var startchange = $('#services');
var offset = startchange.offset();
$(document).scroll(function() {
  scroll_start = $(this).scrollTop();
  if (scroll_start > offset.top ) {
    $('span').addClass('important-white');
}
  else {
    $('span').removeClass('important-white');
}
});

var scroll_start = 0;
var startchange = $('#contact');
var offset = startchange.offset();
$(document).scroll(function() {
  scroll_start = $(this).scrollTop();
  if (scroll_start > offset.top ) {
    $('span').removeClass('important-white');
}
  else {
    $('span').removeClass('important-white');
}
});



// scroll to top button fades in after scrolling.
$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});




});
