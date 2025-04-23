const openMenu = document.querySelector(".header__button");
const closeMenu = document.querySelector(".header__menu__close__button");
const menu = document.querySelector(".header__menu--hidden");

openMenu.addEventListener("click", (e) => {
  e.preventDefault();

  menu.classList.remove("header__menu--hidden");
  menu.classList.add("header__menu--active");
});

closeMenu.addEventListener("click", (e) => {
  e.preventDefault();

  menu.classList.remove("header__menu--active");
  menu.classList.add("header__menu--hidden");
});
