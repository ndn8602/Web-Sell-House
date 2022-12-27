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

$(document).ready(function () {
  if ($("#my-header").attr("id")) {
    var selectHeader = document.getElementById("my-header");
    var btns = selectHeader.getElementsByClassName("project--nav__btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  }
});
let count = 0;
$(".box-contact").click(() => {
  count++;
  if (count === 1) {
    $(".box-btnContact").css({
      display: "none",
      padding: "1rem",
    });
    $(".box-contact").css({
      height: "28%",
    });
  }
  if (count === 2) {
    $(".box-btnContact").css({
      display: "flex",
      padding: "1rem",
    });
    $(".box-contact").css({
      height: "4rem",
    });
    count = 0;
  }
});
