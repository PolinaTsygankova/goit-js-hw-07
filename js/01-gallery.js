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

gallery.addEventListener("click", onImgClick);

function onImgClick(evt) {
   evt.preventDefault();
   const photoLink = evt.target.dataset.source;

   if (evt.target.nodeName !== "IMG") {
      return;
   }

   const instance = basicLightbox.create(
      `<img width="1400" height="900" src=${photoLink}>`
   );
   instance.show();

   function onImgClose(evt) {
      if (evt.code === "Escape") {
         instance.close();
      }
   }
   gallery.addEventListener("keydown", onImgClose);
}

//       const instance = basicLightbox
//          .create(
//             `<img width="1400" height="900" src=${photoLink}>`,

//             {
//                onShow: (instance) => console.log("onShow", instance),
//                onClose: (instance) => console.log("onClose", instance),
//             }
//          )
//          .show();

//       function onCloseClick(evt) {
//          if (evt.code === "Escape") {
//             instance.close();
//          }
//       }

//       onShow.addEventListener("keydown", onCloseClick);

//       onClose.removeEventListener("keydown", onCloseClick);
//    }
// }

// const instance = basicLightbox.create(
//    `<img width="1400" height="900" src=${photoLink}>`,
//    {
//       onShow: (instance) => {
//          document.addEventListener(
//             "keydown",
//             (evt) => {
//                if (evt.code === "Escape") {
//                   // console.log('find')
//                   instance.close();
//                }
//             },
//             { once: true }
//          );
//       },
//    }
// );
// instance.show();
