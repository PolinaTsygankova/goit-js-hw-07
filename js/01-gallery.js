import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const photosMarkup = addImagesItems(galleryItems);
gallery.insertAdjacentHTML("beforeend", photosMarkup);

function addImagesItems(galleryItems) {
   return galleryItems
      .map(({ preview, original, description }) => {
         return `
      <li class="gallery__item">
        <a class="gallery__link" target="_self" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
        </a>
      </li>`;
      })
      .join("");
}

// натискаємо тільки на фотографію (перевірка іф), і потім добавляємо та знімаємо на фото, бекграунд або ескейп

gallery.addEventListener("click", onImgClick);

function onImgClick(evt) {
   evt.preventDefault();

   if (evt.target.nodeName !== "IMG") {
      return;
   } else {
      const photoLink = evt.target.dataset.source;

      const instance = basicLightbox
         .create(`<img width="1400" height="900" src=${photoLink}>`)
         .show();
   }
}

document.addEventListener("keydown", onImgClickClose);

function onImgClickClose(evt) {
   if (evt.code === "Escape") {
      const photoLink = evt.target.dataset.source;

      basicLightbox
         .create(`<img width="1400" height="900" src=${photoLink}>`)
         .close();
   }
}
