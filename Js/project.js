//zoom img on scroll{}

$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  let width = $(window).width();
  if (scroll >= 196 && width >= 1024) {
    $(".project--nav").addClass("fixed");
    $(".project--nav").addClass("justify-content-center");
  } else {
    $(".project--nav").removeClass("fixed");
    $(".project--nav").removeClass("justify-content-center");
  }
});
// $(".project--nav a").mousemove(function () {
//   $(this).css("background-color", "green");
// });

// $(".project--nav a").mouseout(function () {
//   $(this).css("background-color", "orange");
// });
// $(".project--nav a").click(console.log(".project--nav a"));
// Get the container element
// var btnContainer = document.getElementsByClassName("project--nav");
// console.log(btnContainer);
// // Get all buttons with class="btn" inside the container
// // var btns = btnContainer.getElementsByClassName("btn");

// // Loop through the buttons and add the active class to the btnHovers/clicked button
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     var btnHovers = document.getElementsByClassName("active");
//     btnHovers[0].className = btnHovers[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }
const btnHovers = document.querySelectorAll(".project--nav__btn");
console.log(btnHovers);
for (let i = 0; i < btnHovers.length; i++) {
  btnHovers[i].addEventListener("click", () => {
    btnHovers[0].className = btnHovers[0].className.replace(" active", "");
    btnHovers[i].className += " active";
  });
}
