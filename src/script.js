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

    // get the year, title, size and medium of the artwork
    let year = artCard.getAttribute("year");
    let title = artCard.getAttribute("title");
    let size = artCard.getAttribute("size");
    let medium = artCard.getAttribute("medium");

    // set the text of the dialog
    document.getElementById("artwork-title").innerHTML = '"' + title + '"';
    document.getElementById("artwork-year").innerHTML = year;
    document.getElementById("artwork-size").innerHTML = size;
    document.getElementById("artwork-medium").innerHTML = medium;

    console.log(year);
    var highResPath = "src/img/artManuel/highRes/" + artCard.id + ".jpg";
    dialog.querySelector("img").src = highResPath;

    // add download
    document.getElementById("artwork-download").href = highResPath;
    document.getElementById("artwork-download").download = artCard.id + ".jpg";

    // Calculate the width of the loaded image
    let loadedImage = new Image();
    loadedImage.src = dialog.querySelector("img").src;
    loadedImage.onload = function () {
      dialog.showModal();
      // show remove display none from blackbox
      document.getElementById("blackBox").style.display = "block";
    };
  });
});



//close dialog
function closeModal(){
  document.getElementById("blackBox").style.display = "none";
  let dialog = document.getElementById("artwork-modal")
  dialog.close()
}