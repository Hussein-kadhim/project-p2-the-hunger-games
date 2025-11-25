const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar");
const closeBtn = document.querySelector(".close-menu");
const overlay = document.querySelector(".overlay");

function openMenu() {
  navMenu.classList.add("active");
  overlay.style.display = "block";
}

function closeMenu() {
  navMenu.classList.remove("active");
  overlay.style.display = "none";
}

hamburger.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);
