import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const body = document.querySelector("body");
// console.log(galleryContainer);

const renderStartGrid = galleryItems
  .map(
    (a) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="">
    <img
      class="gallery__image"
      src="${a.preview}"
      data-source="${a.original}"
      alt="${a.description}"
    />
  </a>
</div>`
  )
  .join("");

galleryContainer.insertAdjacentHTML("beforeend", renderStartGrid);

galleryContainer.addEventListener("click", (evt) => {
  evt.preventDefault();

  if (evt.target === evt.currentTarget) {
    return;
  }

  const originalImageUrl = evt.target.getAttribute("data-source");
  const instance = basicLightbox.create(
    `<img width="1400" height="900" src="${originalImageUrl}">`
  );
  const openModal = () => instance.show();

  openModal();

  body.addEventListener("keydown", closeModal);

  function closeModal(event) {
    if (event.code === "Escape") {
      instance.close();
      body.removeEventListener("keydown", closeModal);
    }
  }
});
