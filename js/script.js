//OUTPUT elements of DOM
const cardContainer = document.getElementById("container-cards");
const mainSection = document.querySelector("main");

//endpoint creation
const endpoint = "https://lanciweb.github.io/demo/api/pictures/";

//AJAX CALL WITH AXIOS LIBRARY
axios
  //GET THE ENDPOINT
  .get(endpoint)
  .then((respondeObj) => {
    //IF SUCCESSFUL EXECUTE THIS
    const cardsData = respondeObj.data;

    // LOOP THROUGH THE ENTIRE ARRAY OF OBJECTS
    for (let i = 0; i < cardsData.length; i++) {
      cardContainer.innerHTML += `
      <!-- CARD -->
      <!-- POPUP IMG -->
      <div class="popup-image">
        <button class="close-popup">Chiudi</button>
        <img src="${cardsData[i].url}" alt="${cardsData[i].title}">
      </div>
      <figure>
        <!-- CARD PIN -->
        <div class="red-pin"></div>
        <!-- CARD PHOTO FRAME -->
        <div class="frame-photo">
          <img src="${cardsData[i].url}" alt="${cardsData[i].title}" />
        </div>
        <!-- PHOTO INFO -->
        <figcaption>
          <span>${cardsData[i].date}</span>
          <h2>${cardsData[i].title}</h2>
        </figcaption>
      </figure>`;
    }

    //DOM OUTPUT elements
    const card = document.getElementsByTagName("figure");
    const popupCard = document.getElementsByClassName("popup-image");
    const btnPopup = document.getElementsByClassName("close-popup");

    //Add eventListener to each card and button
    for (let j = 0; j < card.length; j++) {
      //Show popup when card is clicked
      card[j].addEventListener("click", () => {
        popupCard[j].style.display = "block";
      });

      //Hide popup when btn is clicked
      btnPopup[j].addEventListener("click", () => {
        popupCard[j].style.display = "none";
      });
    }
  })
  .catch((error) => {
    //IF THERE ARE ERRORS EXECUTE THIS
    console.error(error);
  });
