// 
const navBurger = document.querySelector('.nav__burger');
const mobileNav = document.querySelector('.mobile__nav');

navBurger.addEventListener('click', function () {
	mobileNav.classList.toggle('mobile__nav-active');
	navBurger.classList.toggle('nav__burger-close');
})