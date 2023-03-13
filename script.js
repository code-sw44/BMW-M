$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
  });
});

Fancybox.bind("#gallery a", {
  groupAll: true,
  on: {
    ready: (fancybox) => {
      console.log(`fancybox #${fancybox.id} is ready!`);
    },
  },
});

let btn = document.querySelector(`.burger-btn`);

const burgerFunc = (menuClassName, showClassName) => {
  let menu = document.querySelector(`.${menuClassName}`);

  if (menu.className.includes(showClassName)) {
    menu.className = menuClassName;
  } else {
    menu.className += ` ${showClassName}`;
  }
};

btn.addEventListener("click", () => {
  burgerFunc("header__menu", "header__menu-show ");
});