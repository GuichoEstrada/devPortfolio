// Transparent to solid navbar
$(document).ready(function() {
        // Transition effect for navbar 
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 900) { 
              $('.navbar').addClass('solid');
          } else {
              $('.navbar').removeClass('solid');
          }
        });
});

// Typed JS
var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["Carlo Estrada.", "a developer.", "a designer.", "a gamer."],
      typeSpeed: 100,
      loop: true,
    });
  });

// Skills Progress Bar
var lang = {
  "html": "100%",
  "css": "90%",
  "javascript": "70%",
  "php": "55%",
  "angular": "65%"
};

var multiply = 4;

$.each( lang, function( language, pourcent) {

  var delay = 700;
  
  setTimeout(function() {
    $('#'+language+'-pourcent').html(pourcent);
  },delay*multiply);
  
  multiply++;

});