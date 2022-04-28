import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const body = document.querySelector("body");

function renderGrid(gallery) {
  const renderStartGrid = gallery
    .map(
      (item) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
    )
    .join("");

  galleryContainer.insertAdjacentHTML("beforeend", renderStartGrid);
}

renderGrid(galleryItems);

galleryContainer.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target === event.currentTarget) {
    return;
  }

  const originalImageUrl = event.target.getAttribute("data-source");
  const instance = basicLightbox.create(
    `<img width="1400" height="900" src="${originalImageUrl}">`
  );
  const openModal = () => instance.show();

  openModal();

  // =======Escape key exit

  function closeModal(event) {
    if (event.code === "Escape") {
      instance.close();
      body.removeEventListener("keydown", closeModal);
    }
  }

  body.addEventListener("keydown", closeModal);
});
