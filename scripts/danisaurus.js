$(document).ready(function(){
	var $this = $(this),
		$dropdownMenu = $('.dropdown-menu'),
		$dropdown = $('.dropdown');

	$dropdown.on('click', function(){
		console.log('yo')
		if ($dropdownMenu.hasClass('hide')) {
			$this.removeClass('hide').addClass('show');
		}
		else {
			$this.removeClass('show').addClass('hide');
		}
	});
});