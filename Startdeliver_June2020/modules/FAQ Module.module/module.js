$(".faq-question").on("click",function(){
  $(this).next().slideToggle(250);
  $(this).toggleClass("active");
  $(this).parent().siblings().find(".faq-ans").slideUp(250);
  if($(this).hasClass("active")){
    $(this).find(".plus-sign").text("-");
  }else{
    $(this).find(".plus-sign").text("+");
  }
  $(this).parent().siblings().find(".plus-sign").text("+");
})