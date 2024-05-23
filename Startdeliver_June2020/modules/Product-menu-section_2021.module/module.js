$(window).on("load", function(){
  
  if($(window).width() < 993){
    $(".product-child-trigger").on("click", function(){
      $(this).toggleClass('active');
      $(this).next().slideToggle(250);
    })
  }
})