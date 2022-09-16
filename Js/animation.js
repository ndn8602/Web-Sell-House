const header = document.querySelector(".header");
const nav_links = header.querySelectorAll(".nav-link");
let width = screen.width;
console.log(width);
const changeColorHeader = (e) => {
  if (e.includes("introPage")) {
    header.style.backgroundColor = "transparent";
    nav_links.forEach((nav_link) => {
      nav_link.style.color = "white";
    });
    header.style.transition = "all 0.5";
  } else {
    header.style.backgroundColor = "#fff";
    nav_links.forEach((nav_link) => {
      nav_link.style.color = "orange";
    });
  }
};
new fullpage("#myContainer", {
  navigation: true,
  autoScrolling: true,
  anchors: ["firstPage", "secondPage", "3rdPage", "4thpage", "5thpage"], // handler
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    console.log(section);
    changeColorHeader(section.className.split(" "));
    if (destination.index === 3) {
      header.style.backgroundColor = "transparent";
      nav_links.forEach((nav_link) => {
        nav_link.style.color = "white";
      });
      header.style.transition = "all 0.5";
    } else if (destination.index === 5 && width <= 600) {
      destination.index.remove();
    }

    jQuery(".section [data-aos]").removeClass("aos-animate");
  },

  onSlideLeave: function () {
    jQuery(".slide [data-aos]").removeClass("aos-animate");
  },
  afterSlideLoad: function () {
    jQuery(".slide.active [data-aos]").addClass("aos-animate");
  },
  afterLoad: function () {
    jQuery(".section.active [data-aos]").addClass("aos-animate");
    //jQuery('.fp-table.active .aos-init').addClass('aos-animate');
  },
  sectionsColor: ["fff", "#fff", "#fff", "#fff", "#fff"],
  menu: "#menu",
  slidesNavigation: true,
  dropEffect: true,
  //In addition to the extension license you'll
  //need to acquire a fullPage.js license from https://goo.gl/5x9a22
  licenseKey: "8E7D7A7A-25144A1B-AF10A926-C239A4DE",

  responsiveWidth: 1204,
  responsiveSlides: true,
  responsiveSlidesKey: "INSERT YOUR EXTENSION KEY HERE", //see https://goo.gl/xkUmHS
  dropEffect: true,
  dropEffectKey: "INSERT YOUR EXTENSION KEY HERE", //see https://goo.gl/xkUmHS
  dropEffectOptions: {
    speed: 2000,
    color: "#ffc507",
    zIndex: 999999,
    opacity: 0.5,
  },
  resetSliders: true,
  resetSlidersKey: "INSERT YOUR EXTENSION KEY HERE", //see https://goo.gl/xkUmHS
  esponsiveSlidesKey: "INSERT YOUR EXTENSION KEY HERE", //see https://goo.gl/xkUmHS
});
