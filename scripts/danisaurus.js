$(document).ready(function (){
	var $this = $(this)
		$dropdownMenu = $('.dropdown-menu');
		$dropdown = $('.dropdown')

	$dropdown.on('click', function () {
		if $dropdownMenu.hasClass('hide') {
			$dropdownMenu.removeClass('hide').addClass('show');
		}else {
			$dropdownMenu.removeClass('show').addClass('hide');
		}
	});


});