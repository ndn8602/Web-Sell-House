//zoom img on scroll{}


$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  let width = $(window).width();
  console.log(scroll);
  if (scroll >= 196 && width >= 1024) {
    $(".project--nav").addClass("fixed");
  } else {
    $(".project--nav").removeClass("fixed");
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
