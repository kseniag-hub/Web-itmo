$(document).ready(function(){
	$("p").css("fontSize", "40px");
	$(".links1").css("color", "blue");
	$(".links2").css("color", "grey");
	$("form *").attr("disabled", "disabled");
});

$(".links1").prepend("↗");
$(".links2").prepend("↗");
$("a").attr("target", "_blank");
$(".links1").attr("href",function(index, value){
	value = value.split("http");
	if (value[1][0] != 's'){
		value[0] = "https";
	}
	return value.join();
});

$("#ref").click(function () {
	$("a").attr("target", "_self");
	$("a").html(function(index, value) {
		if (value[0] == `↗`) {
			return value.slice(1);
		} else	
	return value;	
	});
});


$(document).ready(function(){
	$(".cool1").click(function(){
  	$(".htmlcontent1").fadeIn(1000);
	});
	$(".cool2").click(function(){
 	 $(".htmlcontent2").fadeOut(1000);
	});
	$(".cool3").click(function(){
 	 $(".htmlcontent3").fadeToggle(1000);
	});
	$(".cool4").click(function(){
 	 $(".htmlcontent4").fadeTo(1000, 0.2);
	});
	$(".cool5").click(function(){
 	 $(".htmlcontent5").slideDown(1000);
	});
});
