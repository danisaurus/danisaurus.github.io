$(document).ready(function(){
	var $this = $(this),
		$dropdownMenu = $('.dropdown-menu'),
		$dropdown = $('.dropdown');

	$dropdown.on('click', function(){
		console.log('yo')
		if ($dropdownMenu.hasClass('hide')) {
			$dropdownMenu.removeClass('hide').addClass('show');
		}
		else {
			$dropdownMenu.removeClass('show').addClass('hide');
		}
	});

	$("pre").snippet("css",{style:"sh_whitengrey"});
});

