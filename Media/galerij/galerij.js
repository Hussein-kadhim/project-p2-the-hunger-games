// Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar");
const closeBtn = document.querySelector(".close-menu");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", function () {
  navMenu.classList.add("active");
  overlay.style.display = "block";
});

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

function closeMenu() {
  navMenu.classList.remove("active");
  overlay.style.display = "none";
}

const downloadButtons = document.querySelectorAll(".downloaden-submit");
const message = document.getElementById("download-message");

downloadButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const imagePath = button.getAttribute("data-img");

    if (!imagePath) {
      message.textContent =
        "Deze afbeelding is momenteel niet beschikbaar om te downloaden.";
      return;
    }

    message.textContent = "";

    const link = document.createElement("a");
    link.href = imagePath;
    link.download = imagePath.split("/").pop();

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});
