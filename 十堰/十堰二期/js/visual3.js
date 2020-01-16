$(function() {
$('html').fontFlex(12, 20, 114);
$('.timeTap').click(function() {
	$('.timeTap').removeClass('timeTapclick');
	$(this).addClass('timeTapclick');
});
$('.list').click(function() {
	$('.list').removeClass('listclick');
	$(this).addClass('listclick');
});
});