const darkModeButton = document.querySelector("#dark-mode-button");
const navBarDesktop = document.querySelector(".navbar-main");
const darkModeSvg = document.querySelector(".logo-title");
const networkButton = document.querySelectorAll(".network-button");
const dropButton = document.querySelectorAll(".navbar-dropbtn");
const dropItem = document.querySelectorAll(".navbar-dropdown-content");
const settingBox = document.querySelector(".settings-box");
const body = document.querySelector("body");
const h2Million = document.querySelectorAll(".million > h2");
const bgMillion = document.querySelector(".million-container");
const millionCard = document.querySelectorAll(".million-card");
const h2MillionCard = document.querySelectorAll(
  ".text-description > h2:first-child"
);
const obliqueLine = document.querySelector(".million-oblique-line");
const winContainer = document.querySelector(".win-container");
const win = document.querySelector(".win");
const winH2 = document.querySelector(".win > h2:first-child");
const winButton = document.querySelectorAll(".win-button");
const svgButton = document.querySelectorAll(".win-button > svg");

function toggleDark() {
  navBarDesktop.classList.toggle("dark-mode");
  darkModeSvg.classList.toggle("dark-mode-svg");
  networkButton.forEach((element) => {
    element.classList.toggle("dark-mode-button-text");
  });
  dropButton.forEach((dropDown) => {
    dropDown.classList.toggle("dropdown-dark-mode-main");
  });
  dropItem.forEach((item) => {
    item.classList.toggle("dropdown-dark-mode");
  });
  h2Million.forEach((item) => {
    item.classList.toggle("text-white");
  });

  bgMillion.classList.toggle("dark-million-container");

  millionCard.forEach((item) => {
    item.classList.toggle("dark-million-card");
  });

  h2MillionCard.forEach((item) => {
    item.classList.toggle("text-white");
  });

  obliqueLine.classList.toggle("dark-million-oblique-line");

  winContainer.classList.toggle("background-win-millions");

  win.classList.toggle("dark-win");

  winH2.classList.toggle("text-white");

  winButton.forEach((item) => {
    item.classList.toggle("dark-win-button");
  });
  svgButton.forEach((item) => {
    item.classList.toggle("dark-svg-win");
  });
}

function toggleSettings() {
  settingBox.classList.toggle("settings-box-toggle");
  body.style.overflow = "hidden";
}

window.onclick = function (event) {
  if (event.target == settingBox) {
    settingBox.classList.add("close-window");
    settingBox.classList.remove("settings-box-toggle");
    body.style.overflow = "auto";
  } else {
    settingBox.classList.remove("close-window");
  }
};

const banner = document.querySelector(".security-banner");
const nav = document.querySelector("nav");
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    nav.classList.add("nav-hidden");
    banner.classList.add("security-hidden");
  } else {
    nav.classList.remove("nav-hidden");
    banner.classList.remove("security-hidden");
  }

  lastScrollY = window.scrollY;
});
