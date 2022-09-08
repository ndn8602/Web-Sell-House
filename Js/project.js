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
$(".project--nav a").hover(
  function () {
    $(this).addClass("active");
  },
  function () {
    $(this).removeClass("active");
  }
);
