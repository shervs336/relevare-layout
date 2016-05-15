$(function(){
	FastClick.attach(document.body);
	
	$('.toggle-nav').click(function(){
		toggleNav();
	});
	
	$(document).keyup(function(e){
		if(e.keyCode == 27){
			if ($('#site-wrapper').hasClass('show-nav')) {
				toggleNav();
			}
		}
	});
	
});

function toggleNav(){
	if ($('#site-wrapper').hasClass('show-nav')) {
		$('#site-wrapper').css('margin-right', '0px');
		$('#site-wrapper').removeClass('show-nav');
		$('#site-content').removeClass('no-events');
		$(document.body).removeClass('no-scroll');
	} else {
		$('#site-wrapper').css('margin-right', '-300px');
		$('#site-wrapper').addClass('show-nav');
		$('#site-content').addClass('no-events');
		$(document.body).addClass('no-scroll');
	}
}