window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  } 
}

$(document).ready(function(){
  $(window).scroll(function(){
      if($(window).scrollTop() > 100){
          $("nav").css({"background-color":"#333"});   
          $(".underline").css({"color":"#ddd"});  
          $(".linkedIn").css({"color":"blue"}); 
          $(".logo").css({"color":"crimson"}); 
      }
      else{
          $("#navbar").css({"background-color":""});
          $(".underline").css({"color":"#ddd"});  
          $(".linkedIn").css({"color":"blue"}); 
          $(".logo").css({"color":"#333"});    
      }

  })
})

jQuery(function(){
  $(function () {
      $(window).scroll(function () {
          if ($(this).scrollTop() > 200 ) { 
              $('#scrollUp').css('right','10px');
          } else { 
              $('#scrollUp').removeAttr( 'style' );
          }

      });
  });
});

