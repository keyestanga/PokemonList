'use strict';
//header-menu
var menuButton = document.querySelector('.btn-menu');
var mobileMenu = document.querySelector('.nav-small');

menuButton.addEventListener('click', showOrHideMenu);

function showOrHideMenu() {
  mobileMenu.classList.toggle('nav-small-show');
}
