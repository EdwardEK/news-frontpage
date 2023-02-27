const navbarBtn = document.querySelector(".navbar__btn");
const navigation = document.querySelector("nav");
const navBarSingleLink = document.querySelector(".navbar__links");
const opaqueLayer = document.querySelector(".wrapper-layer");
const body = document.querySelector("body");
// nav button click event
navbarBtn.addEventListener("click", function () {
  clicked();
  console.log("click");
});

// link click event
navBarSingleLink.addEventListener("click", function (e) {
  e.stopPropagation();
  // test console.log(e.target.nodeName);
  if (e.target.nodeName === "A") {
    clicked();
    // test console.log(e.target);
  }
});

function clicked() {
  let value = navigation.classList.contains("navbar__collapse");

  if (value) {
    navigation.classList.remove("navbar__collapse");
    navbarBtn.classList.remove("change");
    opaqueLayer.classList.remove("navbar__collapse");
    body.classList.remove("overflow");
    console.log("remove class");
  } else {
    navigation.classList.add("navbar__collapse");
    navbarBtn.classList.add("change");
    opaqueLayer.classList.add("navbar__collapse");
    body.classList.add("overflow");
    console.log("add class");
  }
}
