$(document).ready(function(){
$('.menu-triger').click(function(){
$('nav ul').slideToggle(500);
});


$(window).resized(function(){
  if ($(window).width()>500){
    $('nav ul').removwAttr('style');
  }
});//end resize
});//end ready
