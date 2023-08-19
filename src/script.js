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
