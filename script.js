'use strict'

const menuBtn = document.querySelector('.menu__btn')
const mobileMenu = document.querySelector('.nav__mobile')
const backdrop = document.querySelector('.backdrop')
const links = document.querySelectorAll('.nav__link')

const closeMenu = function() {
   mobileMenu.classList.remove('open')
   menuBtn.setAttribute("aria-expanded", false);
   backdrop.classList.add('hidden')
}

const openMenu = function() {
   mobileMenu.classList.add('open')
   menuBtn.setAttribute("aria-expanded", true);
   backdrop.classList.remove('hidden')
} 

menuBtn.addEventListener('click', function() {
   mobileMenu.classList.contains('open') ? closeMenu() : openMenu()
})

links.forEach(link => {
   if(link.href === window.location.href) {
      link.setAttribute('aria-current', 'page')
      link.addEventListener('click', closeMenu)
   }
   link.addEventListener('click', closeMenu)
})

backdrop.addEventListener('click', closeMenu)