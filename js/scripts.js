$(document).ready(function(){

    /* For parallaxing images */
    $('.parallax').parallax();

    /* To scroll to a section from navbar */
    $('.scrollspy').scrollSpy();
	/* For Slider */
     $('.slider').slider({full_width: false});
      
      // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();
});