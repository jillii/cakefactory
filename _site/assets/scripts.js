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

	scroll_to($el_w_id);

});

$(document).ready(function(){
	$target = window.location.hash;

	if ($target) {
		$section = $($target);
		scroll_to($section);
	}
});

function scroll_to($section) {

	$('section.active').removeClass('active');
	$section.addClass('active');	
}