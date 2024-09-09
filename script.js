const treatmentButton = document.querySelector("#treatments-link");
const treatmentPopup = document.querySelector(".treatments-popup");
const treatmentContainer = document.querySelector(
  ".treatments-popup .treatments-container"
);

const helpButton = document.querySelector("#nav-button-2");

const contactCard = document.querySelector(".contact-card");

const cardItem = document.querySelector(".contact-card .contact-item");

treatmentButton.addEventListener("click", (e) => {
  e.stopPropagation();
  treatmentPopup.classList.toggle("open");
});

helpButton.addEventListener("click", (e) => {
  e.stopPropagation();
  contactCard.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  if (
    !treatmentContainer.contains(e.target) &&
    treatmentPopup.classList.contains("open")
  ) {
    treatmentPopup.classList.remove("open");
  }
});

document.addEventListener("click", (e) => {
  if (
    !treatmentContainer.contains(e.target) &&
    treatmentPopup.classList.contains("open")
  ) {
    treatmentPopup.classList.remove("open");
  }
});
document.addEventListener("click", (e) => {
  if (!cardItem.contains(e.target) && contactCard.classList.contains("open")) {
    contactCard.classList.remove("open");
  }
});

document.addEventListener("click", (e) => {
  if (!cardItem.contains(e.target) && contactCard.classList.contains("open")) {
    contactCard.classList.remove("open");
  }
});
