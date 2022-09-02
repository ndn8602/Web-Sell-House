function openMenu() {
  let w = window.innerWidth;
  console.log(w);
  if (w > 400) {
    document.getElementById("myMenu").style.width = "400px";
    document.getElementById("myDIV").style.opacity = "0.5";
  } else {
    document.getElementById("myMenu").style.width = "100%";
  }
  document.body.style.backgroundColor = "rgba(0,0,0,0.2)";
}

function closeMenu() {
  document.getElementById("myMenu").style.width = "0";
  document.body.style.backgroundColor = "white";
}

//section2
$(".service").owlCarousel({
  dotsEach: 1,
  loop: true,
  margin: 20,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 3,
    },
  },
});

//hover section2
const cards = document.querySelectorAll(".resort_item");
let check = false;
const defaultbox = () => {
  if (!check) {
    //false
    cards[1].classList.add("move");
  } else {
    cards[1].classList.remove("move");
  }
};
defaultbox();
for (let i = 0; i < cards.length; i++) {
  const element = cards[i];
  element.addEventListener("mouseover", () => {
    console.log("in");
    if (element.className.split(" ").includes("move")) {
      return;
    } else {
      element.classList.add("move");
      check = true;
      defaultbox();
    }
  });
}
for (let i = 0; i < cards.length; i++) {
  const element = cards[i];
  element.addEventListener("mouseout", () => {
    console.log("out");
    element.classList.remove("move");
    check = false;
    defaultbox();
  });
}
