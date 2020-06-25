// SIDE BAR 

$('#menu-toggle').click(function (e) {
	e.stopPropagation();
	$("#wrapper").toggleClass("toggled");
});
// $('#sidebar-wrapper').click(function (e) {
//   e.stopPropagation();
// });


$('body,html').click(function (e) {
	$('#wrapper').removeClass('toggled');
});



// ICON 
feather.replace()

//SELECT
$('select').selectpicker();

