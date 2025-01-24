//endpoint creation
const endpoint = "https://lanciweb.github.io/demo/api/pictures/";

//OUTPUT elements of DOM
const cardContainer = document.getElementById("container-main"); 

//AJAX CALL WITH AXIOS LIBRARY
axios
  //GET THE ENDPOINT
  .get(endpoint)
  .then((respondeObj) => {
    //IF SUCCESSFUL EXECUTE THIS
    console.log(respondeObj.data);

  })
  .catch((error) => {
    //IF THERE ARE ERRORS EXECUTE THIS
  });
