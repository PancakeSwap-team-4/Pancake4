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
const tradeBackground = document.querySelector(".trade");
const tradeTitle = document.querySelector(".tradeTitle");
const earnLine = document.querySelector(".earnLine");
const earnCont = document.querySelector(".earnCont");
const earnTitle = document.querySelector(".earnTitle");
const farmsTitle = document.querySelector(".top-title-main");
const farmsValue = document.querySelectorAll(".value");
const cakeCont = document.querySelector(".cakeCont");
const cakeTitle = document.querySelector(".cakeTitle");
const cakeValue = document.querySelectorAll(".countvalue");
const goTopButton = document.querySelector(".up-button");
const goTopArrow = document.querySelector(".arrow-top");
const header = document.querySelector("header");
const moon = document.querySelector(".moon");
const roundBackground = document.querySelector(
  ".round-background > svg:nth-child(1)"
);
const roundBackground2 = document.querySelector(
  ".round-background > svg:nth-child(2)"
);
const headBtn = document.querySelector(".head-btn");
const moonBtn = document.querySelector(".moon-btn");
const headCaption = document.querySelector(".head-caption > h3");
const closeBanner = document.querySelector(".close-security-banner");
const bannerContainer = document.querySelector(".security-banner");
const navbarDesktopContainer = document.querySelector(".navbar-desktop");
const inputDark = document.querySelector(".input-dark");
const inputDark1 = document.querySelector(".input-dark-1");
const menuButton = document.querySelectorAll(".menu-button");
const languageDropdown = document.querySelector(".language-dropdown-content");
const navBarMobile = document.querySelector(".navbar-mobile-main");

inputDark.addEventListener("change", () => {
  inputDark1.checked = inputDark.checked;
});

inputDark1.addEventListener("change", () => {
  inputDark.checked = inputDark1.checked;
});

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
  tradeBackground.classList.toggle("dark-trade-background");
  tradeTitle.classList.toggle("dark-trade-text");
  earnLine.classList.toggle("dark-trade-background-line");
  earnCont.classList.toggle("dark-earn-background");
  earnTitle.classList.toggle("dark-earn-text");
  farmsTitle.classList.toggle("dark-earn-text");
  farmsValue.forEach((value) => {
    value.classList.toggle("dark-earn-text");
  });
  cakeCont.classList.toggle("dark-cake-background");
  cakeTitle.classList.toggle("dark-cake-text");
  cakeValue.forEach((value) => {
    value.classList.toggle("dark-cake-text");
  });
  goTopArrow.classList.toggle("go-top-dark");

  header.classList.toggle("header-dark");
  moon.classList.toggle("moon-dark");
  headBtn.classList.toggle("dark-win-button");
  moonBtn.classList.toggle("dark-win-button");
  headCaption.classList.toggle("head-caption-dark");
  roundBackground.classList.toggle("round-background-dark");
  roundBackground2.classList.toggle("round-background-dark-true");
  navBarMobile.classList.toggle("dark-mode")
}

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  // User prefers dark mode
  toggleDark();
  inputDark.checked = true;
  inputDark1.checked = true;
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

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    goTopButton.style.display = "block";
  } else {
    goTopButton.style.display = "none";
  }
}

const banner = document.querySelector(".security-banner");
const nav = document.querySelector("nav");
const navMobile = document.querySelector(".navbar-mobile");
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    nav.classList.add("nav-hidden");
    banner.classList.add("security-hidden");
    navMobile.classList.add("nav-hidden");
  } else {
    nav.classList.remove("nav-hidden");
    banner.classList.remove("security-hidden");
    navMobile.classList.remove("nav-hidden");
  }

  lastScrollY = window.scrollY;
});

goTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

closeBanner.addEventListener("click", () => {
  bannerContainer.classList.remove("security-banner");
  bannerContainer.innerHTML = "";
  navbarDesktopContainer.style.margin = 0;
});
