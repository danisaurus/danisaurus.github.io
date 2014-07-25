$(document).ready(function (){
	var $dropdownMenu = $('.dropdown-menu');
		$dropdown = $('.dropdown')

	$dropdown.on('tap', function (){
		$dropdownMenu.removeClass('hide').addClass('show');
	});

	$dropdown.on('tap', function (){
		$dropdownMenu.removeClass('show').addClass('hide');
	});

});