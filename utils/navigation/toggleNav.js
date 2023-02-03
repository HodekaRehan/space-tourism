import get from "../getElement.js";

const menuBtn = get(".menu__btn");
const mobileMenu = get(".nav__mobile");
const backdrop = get(".backdrop");

const closeMenu = function () {
  mobileMenu.classList.remove("open");
  menuBtn.setAttribute("aria-expanded", false);
  backdrop.classList.add("hidden");
};

const openMenu = function () {
  mobileMenu.classList.add("open");
  menuBtn.setAttribute("aria-expanded", true);
  backdrop.classList.remove("hidden");
};

menuBtn.addEventListener("click", function () {
  mobileMenu.classList.contains("open") ? closeMenu() : openMenu();
});

backdrop.addEventListener("click", closeMenu);

export {closeMenu, openMenu}
