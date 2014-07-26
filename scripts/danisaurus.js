$(document).ready(function(){
	var $this = $(this),
		$dropdownMenu = $('.dropdown-menu'),
		$dropdown = $('.dropdown');

	$dropdown.on('click', function(){
		console.log('yo')
		if ($dropdownMenu.hasClass('hide')) {
			console.log('ugh')
			$dropdownMenu.removeClass('hide').addClass('show');
		}
		else {
			$this.removeClass('show').addClass('hide');
		}
	});
});