'use strict';

/* Mobile Menu Click
/* ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## */

$('.header-nav__menu-bt').on("click", function() {
  $(this).toggleClass('clicked');
  $('.dropdown-menu').slideToggle();
});
