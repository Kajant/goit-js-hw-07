'use strict';
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery")
const picture =galleryItems.map((image) => 
`<div class="gallery__item">
<a class="gallery__link" href="${image.original}">
<img
    class="gallery__image"
    src="${image.preview}"
    data-source="${image.original}"
    alt="${image.description}"
 />
 </a>
</div>`)
  .join("");
gallery.insertAdjacentHTML("beforeend", picture)

gallery.addEventListener("click", getOriginalImg);
function getOriginalImg (event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width = "800" height ="600">`
  );
  instance.show();

  if (instance.show() === true) {
    document.addEventListener("keydown", escapeKey);
    function escapeKey(event) {
      if (event.code === "Escape") {
        instance.close();
        document.removeEventListener("keydown", escapeKey);
      }
  }
  }
}