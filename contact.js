$(document).ready(main);

var contador = 1;

function main () {
	$('.img-contact-form').click(function(){
		if (contador == 1) {
			$('.contact_form').animate({
				right: '-1rem'
			});
			contador = 0;
		} else {
			contador = 1;
			$('.contact_form').animate({
				right: '-100%'
			});
		}
	});
	$('.contact-escape').click(function(){
		if (contador == 1) {
			$('.contact_form').animate({
				right: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('.contact_form').animate({
				right: '-100%'
			});
		}
	});
}