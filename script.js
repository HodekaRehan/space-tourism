import {closeMenu} from './utils/navigation/toggleNav.js'
import fetchData from './utils/fetchData.js';
import displayDestinations from './utils/destination/displayDestinations.js';

const links = document.querySelectorAll(".nav__link");

links.forEach((link) => {
  if (link.href === window.location.href) {
    link.setAttribute("aria-current", "page");
    link.addEventListener("click", closeMenu);
  }
  link.addEventListener("click", closeMenu);
});

const start = async function() {
  const data = await fetchData()
  displayDestinations(data.destinations)
}

start()

