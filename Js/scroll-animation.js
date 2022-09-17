var Scrollbar = window.Scrollbar;
options = {
  damping: 0.05,
  alwaysShowTracks: true,
};
let scrollbar = Scrollbar.init(
  document.querySelector("#my-scrollbar"),
  options
);
scrollbar.setPosition(0, 0);
scrollbar.track.xAxis.element.remove();
function listener(status) {
  let scroll = scrollbar.offset.y;
  let width = window.innerWidth;
  if (width > 1200) {
    if (scroll <= 200) {
      $("header").css("backgroundColor", "transparent");
      $("header").css("width", "99.5%");
      $(".navbar-nav-tool a").css("color", "white");
      $(".nav-item a").css("color", "white");
      $(".dropdown-item").css("color", "black");
    } else {
      $("header").css("backgroundColor", "white");
      $("header").css("width", "100%");
      $(".navbar-nav-tool a").css("color", "orange");
      $(".nav-item a").css("color", "orange");
      $(".dropdown-item").css("color", "orange  ");
    }
    if (scroll <= 650) {
      $(".project--nav__off").css("visibility", "visible");
      $(".header-show").removeClass("hide");
    } else {
      $(".header-show").addClass("hide");
      $(".project--nav__off").css("visibility", "hidden");
    }
  } else {
    $("header").css("backgroundColor", "white");
  }
}
scrollbar.addListener(listener);

//Handle offset Scroll

[].forEach.call(document.querySelectorAll("[data-aos]"), (el) => {
  scrollbar.addListener(() => {
    if (scrollbar.isVisible(el)) {
      el.classList.add("aos-animate");
    }
  });
});
