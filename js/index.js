// Manu 3
// var swiper = new Swiper(".home-slider", {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 7500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   loop: true,
// });

// let menu = document.queryselector("#menu");
// let navbar = document.queryselector(".navbar");

// menu.onclick = () => {
//   menu.classlist.toggle("fa-times");
//   navbar.classlist.toggle("active");
// };

// Shopping Cart

$(document).ready(function () {
  var counts = 0;
  $(".increase-btn").click(function () {
    counts += +1;
    $(".selected").animate(300, function () {
      $(this).text(counts);
    });
  });
  $(".decrease-btn").click(function () {
    counts -= 1;
    $(".selected").animate(300, function () {
      $(this).text(counts);
    });
  });
});

console.log("user");
// Login Page
$(".message a").click(function () {
  $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
});

let username = document.getElementById("login-name");
let userpassword = document.getElementById("user-password");
let loginBtn = document.querySelector("#login-btn");
function submit() {
  loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (username.value == "admin" && userpassword.value == "12345678") {
      window.location.replace("admin.html");
    } else {
      console.log(username.value);
      console.log(userpassword.value);
    }
  });
}

submit();
