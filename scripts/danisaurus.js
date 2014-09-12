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


	$("pre").snippet("html");
	    // Finds <pre> elements with the class "htmlCode"
	    // and snippet highlights the HTML code within.
	$("pre").snippet("css",{style:"whitengrey"});
	    // Finds <pre> elements with the class "styles"
	    // and snippet highlights the CSS code within
	    // using the "greenlcd" styling.
	$("pre").snippet("javascript",{style:"random",transparent:true,showNum:false});
	    // Finds <pre> elements with the class "js"
	    // and snippet highlights the JAVASCRIPT code within
	    // using a random style from the selection of 39
	    // with a transparent background
	    // without showing line numbers.
});

