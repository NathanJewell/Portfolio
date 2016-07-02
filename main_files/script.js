function replaceClass(remove, add, DOMobj) {
	$(DOMobj).removeClass(remove);
	$(DOMobj).addClass(add);
}

$("#navbar-top > li").addClass("nohover");
$("#navbar-top li li").addClass("none");
$("#navbar-top li li").addClass("nohover");

$("#navbar-top > li").hover(
 function() {
 	replaceClass("nohover", "hover", $(this));
 	replaceClass("none", "block", $(this).find("li"));
 }, function() {
 	replaceClass("hover", "nohover", $(this));
 	replaceClass("block", "none", $(this).find("li"));
 });

$("#navbar-top li li").hover(
 function() {
 	 replaceClass("nohover", "hover", $(this));
 }, function() {
 	 replaceClass("hover", "nohover", $(this));
 });


