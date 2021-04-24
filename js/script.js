$(document).ready(function() {

  $('#cont > div').attr('data-display', 'none'); // Initially hide all content
  $('.tabs_active div:first').attr('data-active', 'active');
  $('.tabs div:first').attr('data-active', 'active'); // Activate first tab
  $('#cont div:first').attr('data-display', 'active'); // Show first tab content

  $('.tabs div').click(function(event) {
    event.preventDefault();
    $('#cont > div').attr('data-display', 'none'); //Hide all content
    $('.tabs div').attr('data-active', ''); //Reset id's
    $(this).attr('data-active', 'active'); // Activate this
    $('[title="' + $(this).attr('title') + '"').attr('data-active', 'active');
    $('#' + $(this).attr('title')).attr('data-display', 'active'); //Show content for current tab
  });	

  $('.tabs div').click(function () {
    let text = $(this).text();
    $('.tabs_drop input').val(text);
  });

  function dropActive() {
    let $tabs_drop = $('.tabs_drop div');
    if ($tabs_drop.attr('data-active')) {
      $tabs_drop.removeAttr('data-active');
    } else {
      $tabs_drop.attr('data-active', 'active');
    }
  };
  $('.tabs_drop div').click(dropActive);
  $('.hamburger').click(dropActive);

  function drop() {
	$('.tabs_drop').next('.tabs_active').slideToggle();
  };
  $('.hamburger').click(drop);
  $('.tabs_drop div').click(drop);

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
  });

});