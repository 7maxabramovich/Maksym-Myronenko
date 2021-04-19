//*********************************


/*---------   document ready   -----------*/
$(document).ready(function() {
	
$("#cont > div").hide(); // Initially hide all content
$(".tabs_style div:first").attr("style","active");
$(".tabs div:first").attr("style","active"); // Activate first tab
$("#cont div:first").fadeIn(); // Show first tab content

$('.tabs div').click(function(e) {
	e.preventDefault();
	$("#cont > div").hide(); //Hide all content
	$(".tabs div").attr("style",""); //Reset id's
	$(this).attr("style","active"); // Activate this
	$('[title="' + $(this).attr('title') + '"').attr("style","active");
	$('#' + $(this).attr('title')).fadeIn(); // Show content for current tab
});	

//*************   slick-slider   *********//
  $('.slider').slick({
	autoplay: false,
	speed: 800,
	autoplaySpeed: 2000,
	arrows: false,
	dots: true,
	adaptiveHeight: true,
	infinite: true,
	slidesToShow: 1, 
	slidesToScroll: 1,
	responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToScroll: 1,
			slidesToShow: 1
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToScroll: 1,
			slidesToShow: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToScroll: 1,
			slidesToShow: 1
		  }
		}
	]
  });



//*************    end document ready    *********//
});