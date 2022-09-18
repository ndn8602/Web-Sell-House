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

// const btnHovers = document.querySelectorAll(".project--nav__btn");
// for (let i = 0; i < btnHovers.length; i++) {
//   btnHovers[i].addEventListener("click", () => {
//     btnHovers[0].className = btnHovers[0].className.replace(" active", "");
//     btnHovers[i].className += " active";
//   });
// }

var selectHeader = document.getElementById("my-header");
console.log(selectHeader)
var btns = selectHeader.getElementsByClassName("project--nav__btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
