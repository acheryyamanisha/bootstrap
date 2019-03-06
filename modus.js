$(document).ready(function(){
	$("#portfolio").click(function(){

		$("#dd").slideToggle("slow");
	});

	$(".col-sm-3").hover(function(){
  	$(".col-sm-3 .glyphicon,.col-sm-3 .btn-info").addClass("hoverc");
  	$(".rbody").addClass("hoverb");
},
function(){
  $(".col-sm-3 .glyphicon,.col-sm-3 .btn-info").removeClass("hoverc");
  	$(".col-sm-3").removeClass("hoverb");
});
});