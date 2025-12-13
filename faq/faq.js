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

const form = document.getElementById("faqForm");
const messageBox = document.getElementById("form-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  messageBox.textContent = "";
  messageBox.className = "form-message";

  fetch("https://formspree.io/f/movglopq", {
    method: "POST",
    body: new FormData(form),
    headers: {
      Accept: "application/json",
    },
  })
    .then(function (response) {
      if (response.ok) {
        messageBox.textContent =
          "Uw vraag is succesvol verzonden. Wij hebben uw vraag ontvangen.";
        messageBox.classList.add("success");
        form.reset();
      } else {
        messageBox.textContent =
          "Het verzenden van uw vraag is niet gelukt. Probeert u het later opnieuw.";
        messageBox.classList.add("error");
      }
    })
    .catch(function () {
      messageBox.textContent =
        "Het verzenden van uw vraag is niet gelukt. Probeert u het later opnieuw.";
      messageBox.classList.add("error");
    });
});
