$(document).ready(function (){
	var $this = $(this),
		$dropdownMenu = $('.dropdown-menu'),
		$dropdown = $('.dropdown');

	$dropdown.on('click', function () {
		if $dropdownMenu.hasClass('hide') {
			$this.removeClass('hide').addClass('show');
		}else {
			$this.removeClass('show').addClass('hide');
		}
	});
});