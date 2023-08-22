// change url when clicked on navlink, without page reloading and remove active class from all other navlinks and remove d-none class from the div with the same id as the navlink

let navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", function () {
    navLinks.forEach((navLink) => {
      navLink.classList.remove("active");
    });
    navLink.classList.add("active");
    let id = navLink.getAttribute("data-category");
    if (id != "family") {
      let div = document.querySelector(`#${id}`);
      // add id to the url without reloading the page
      window.history.pushState("", "", `?category=${id}`);
      let divs = document.querySelectorAll(".category");
      divs.forEach((div) => {
        div.classList.add("d-none");
      });
      div.classList.remove("d-none");
    }
  });
});

// macht das richtige div sichtbar wenn seite geladen wird
document.addEventListener("DOMContentLoaded", function () {
  let url = window.location.href;
  let id = url.split("=")[1];
  if (id != undefined) {
    let div = document.querySelector(`#${id}`);
    let divs = document.querySelectorAll(".category");
    divs.forEach((div) => {
      div.classList.add("d-none");
    });
    div.classList.remove("d-none");
  }
});

$(document).ready(function () {
  $(".collapse-card").on("click", function () {
    $(this).find(".collapse-content").toggleClass("show");
  });
});

// füge passende Bilder zu karte hinzu und eventlistener, welcher dialogfenster mit besserer Qualität ladet
let artCards = document.querySelectorAll(".artCard");



artCards.forEach((artCard) => {
  console.log(artCard.id);
  artCard.querySelector("img").src =
    "src/img/artManuel/lowRes/" + artCard.id + "-min.jpg";
  artCard.addEventListener("click", function () {
    let dialog = document.getElementById("artwork-modal");
    console.log("test");
    dialog.querySelector("img").src =
      "src/img/artManuel/highRes/" + artCard.id + ".jpg";

    // Calculate the width of the loaded image
    let loadedImage = new Image();
    loadedImage.src = dialog.querySelector("img").src;
    loadedImage.onload = function () {
      dialog.classList.add("show"); // Add the "show" class to trigger the animation
      dialog.showModal();
    };
  });
});



//close dialog
function closeModal(){
  let dialog = document.getElementById("artwork-modal")
  dialog.close()
}