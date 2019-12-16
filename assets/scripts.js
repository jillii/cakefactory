console.log("gReEtInG foRm thE sOuRcE cOdE");

console.log("   ^---^  ");
console.log("  ( . . ) ");
console.log("    ---    n   ");
console.log(" (       ) \\\\   ");
console.log("   O   O   //   ");

$('.page-link').click(function() {
	$this = $(this);
	$id = $this.attr("href");
	$el_w_id = $($id);

	scroll_to($id);

});

$(document).ready(function(){
	$hash = window.location.hash;

	if ($hash) {
		scroll_to($hash);
	} else {
		$('#intro').addClass('active');
		$('.page-link:first-of-type').addClass('active')
	}
});

function scroll_to($id) {
	$section = $($id);
	$page_link = $(".page-link[href$='" + $id + "']");

	$('section.active').removeClass('active');
	$('.page-link.active').removeClass('active');
	$section.addClass('active');
	$page_link.addClass('active');	
}