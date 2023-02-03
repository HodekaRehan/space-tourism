import {closeMenu} from './utils/navigation/toggleNav.js'

const links = document.querySelectorAll(".nav__link");

links.forEach((link) => {
  if (link.href === window.location.href) {
    link.setAttribute("aria-current", "page");
    link.addEventListener("click", closeMenu);
  }
  link.addEventListener("click", closeMenu);
});


