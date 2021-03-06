import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

function renderGrid(gallery) {
  const renderStartGrid = gallery
    .map(
      (item) =>
        `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`
    )
    .join("");

  galleryContainer.insertAdjacentHTML("beforeend", renderStartGrid);
}

renderGrid(galleryItems);

let gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionDelay: 250,
});

gallery.on("show.simplelightbox", {});
