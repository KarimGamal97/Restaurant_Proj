// Manu 3
var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

let menu = document.queryselector("#menu");
let navbar = document.queryselector(".navbar");

menu.onclick = () => {
  menu.classlist.toggle("fa-times");
  navbar.classlist.toggle("active");
};

// Manu 3
