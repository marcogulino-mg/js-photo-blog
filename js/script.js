//OUTPUT elements of DOM
const cardContainer = document.getElementById("container-cards");
// const rowContainer = document.querySelectorAll(".row");

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
      <figure>
        <!-- CARD PIN -->
          <div class="red-pin"></div>
            <!-- CARDS PHOTO CONTAINER -->
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
  })
  .catch((error) => {
    //IF THERE ARE ERRORS EXECUTE THIS
  });
