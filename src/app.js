// css
import "./assets/styles/css/footer.css";
import "./assets/styles/css/general.css";
import "./assets/styles/css/header.css";
import "./assets/styles/css/infoCards.css";
import "./assets/styles/css/newsCalendar.css";
import "./assets/styles/css/shortsAnonses.css";
import "./assets/styles/css/viewOpera.css";

// images
import "./assets/images/concert-logo.png";
import "./assets/images/female-pink.avif";
import "./assets/images/female.jpg";
import "./assets/images/img-dragon.jfif";
import "./assets/images/img-library.jfif";
import "./assets/images/img-opera-event.jpg";
import "./assets/images/img-opera-scene-blue.jfif";
import "./assets/images/img-opera-scene-red.jfif";
import "./assets/images/img-opera-seats-view.jpg";
import "./assets/images/img-people.jfif";
import "./assets/images/male-tabel.jpg";

// scripts
import "./js/navbar.js";
import { changePhotos, ViewButtons } from "./js/view-opera.js";
import { updateCard, updateCard2 } from "./js/news.js";
import { BtntxtContent } from "./js/poster.js";
import { updateMonth } from "./js/newsCalendar.js";
import { closeModal } from "./js/brief.js";


// ViewButton
const viewButton1 = new ViewButtons('./images/img-opera-scene-blue.jfif', '«Performance/Opera»');
const viewButton2 = new ViewButtons('./images/img-opera-seats-view.jpg', '«Opera Seating»');
const viewButton3 = new ViewButtons('./images/img-opera-event.jpg', '«Opera Events»');

viewButton1.createViewBtn();
viewButton2.createViewBtn();
viewButton3.createViewBtn();

changePhotos();

// uprated cards
updateCard();
updateCard2()

//Button textContent
BtntxtContent();

updateMonth();

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal(modal);
  }
});
