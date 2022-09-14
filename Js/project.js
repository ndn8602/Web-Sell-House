$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  let width = $(window).width();
  if (scroll >= 196 && width >= 1024) {
    $(".project--nav").addClass("fixed");
    $(".project--nav").addClass("justify-content-center");
    $(".project--nav").css(" visibility", " visible");
  } else {
    $(".project--nav").removeClass("fixed");
    $(".project--nav").css(" visibility", " hidden");
    $(".project--nav").removeClass("justify-content-center");
  }
});

// const Scrollbar = require("smooth-scrollbar");

const btnHovers = document.querySelectorAll(".project--nav__btn");
for (let i = 0; i < btnHovers.length; i++) {
  btnHovers[i].addEventListener("click", () => {
    btnHovers[0].className = btnHovers[0].className.replace(" active", "");
    btnHovers[i].className += " active";
  });
}
//zoom img on scroll{}
