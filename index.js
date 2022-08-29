const hamburger = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

hamburger.addEventListener("click", () => {
  let isOpen = primaryNav.getAttribute("data-visible");
  console.log(isOpen);
  if (isOpen === "false") {
    primaryNav.style.transform = "translateX(0)";
    primaryNav.setAttribute("data-visible", true);
    hamburger.setAttribute("aria-expanded", true);
  } else {
    primaryNav.style.transform = "translateX(100%)";
    primaryNav.setAttribute("data-visible", false);
    hamburger.setAttribute("aria-expanded", false);
  }
});

// when someone clicks the hamburger menu
// if the menu is closed (if aria-expanded="false"):
//  1. open it (translate x -100%)
//  2. set aria-expanded="true"
//  3. change icon to x
// if the menu is open (if aria-expanded="false"):
//  1. close it (translate x 100%)
//  2. set aria-expanded="false"
//  3. change icon to hamburger
