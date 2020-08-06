$(document).ready(function(){

$("button").click(function(){
	$(".rslides").slideToggle(2000);
})


$(".rslides").responsiveSlides({
  auto: false,             // Boolean: Animate automatically, true or false
  pager: true,           // Boolean: Show pager, true or false
   
});

	 $(".rslides").responsiveSlides(2000);

})