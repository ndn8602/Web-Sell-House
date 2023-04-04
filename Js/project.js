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
let count = 1;

$(".box-contact").click(() => {
  if (!$(".box-contact").hasClass("active")) {
    $(".box-contact").addClass("active");
  }
});
$(document.body).click(() => {
  count++;
  
  if (count === 2) {
    $(".box-contact").removeClass("active");
    count = 0;
  }

  if($('div').hasClass('show')){
    $('div').removeClass('show')
  }
});
