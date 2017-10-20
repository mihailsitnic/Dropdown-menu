'use strict';

/* Mobile Menu Click
/* ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## */

$('.header-nav__menu-bt').on("click", function() {
  $(this).toggleClass('clicked');
  $('.pb__dropdown-menu').slideToggle();
});
