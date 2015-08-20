$(document).ready(function() {
	$('.submenu ul').hide();
	$('.submenu > a').click(function(e) {
		e.preventDefault();
		$(e.target).siblings('ul').fadeToggle();
	});
});