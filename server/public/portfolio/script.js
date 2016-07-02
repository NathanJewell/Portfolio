function replaceClass(remove, add, DOMobj) {
	$(DOMobj).removeClass(remove);
	$(DOMobj).addClass(add);
}

$("#navbar-top > li").addClass("nohover");
$("#navbar-top li li").addClass("none");
$("#navbar-top li li").addClass("nohover");

var hoverAnimationTime = 100;

$("#navbar-top > li").hover(
 function() {
 	//$(this).find("li").switchClass("none", "block",0);
 	$(this).find("ul,ol").children().show("fade");
 	$(this).switchClass("nohover", "hover", hoverAnimationTime);

 
 }, function() {
 	// $(this).find("li").switchClass("block", "none",0);
 	$(this).find("ul,ol").children().hide("fade");
 	$(this).switchClass("hover", "nohover", hoverAnimationTime);

 });

$("#navbar-top li li").hover(
 function() {
 	 $(this).switchClass("nohover", "hover", hoverAnimationTime);
 }, function() {
 	 $(this).switchClass("hover", "nohover", hoverAnimationTime);
 });

$("#header-name").hover(
 function() {
 	$(this).switchClass("nohover", "hover", hoverAnimationTime);
}, function() {
	$(this).switchClass("hover", "nohover", hoverAnimationTime);
});

$("#uparrow").hover(
function() {
	$(this).stop().animate({
		height: "40px",
		width: "40px",
		marginTop: "20px"
	}, 200);	
},
function() {
	$(this).stop().animate({
		height: "32px",
		width: "32px",
		marginTop: "30px"
	}, 200);	
});

$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});


