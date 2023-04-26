const darkModeButton = document.querySelector("#dark-mode-button");
const navBarDesktop = document.querySelector(".navbar-main");
const darkModeSvg = document.querySelector(".logo-title");
const networkButton = document.querySelectorAll(".network-button")
const dropButton = document.querySelectorAll(".navbar-dropbtn")
const dropItem = document.querySelectorAll(".navbar-dropdown-content");
const settingBox = document.querySelector(".settings-box")
const body = document.querySelector("body")


function toggleDark() {
  navBarDesktop.classList.toggle("dark-mode");
  darkModeSvg.classList.toggle("dark-mode-svg");
  networkButton.forEach(element => {
    element.classList.toggle("dark-mode-button-text")
  })
  dropButton.forEach(dropDown => {
    dropDown.classList.toggle("dropdown-dark-mode-main")
  });
  dropItem.forEach(item => {
    item.classList.toggle("dropdown-dark-mode")
  })
};


function toggleSettings() {
    settingBox.classList.toggle("settings-box-toggle");
    body.style.overflow = "hidden";
}

window.onclick = function(event) {
    if (event.target == settingBox) {
      settingBox.classList.add("close-window");
      settingBox.classList.remove("settings-box-toggle")
      body.style.overflow = "auto"
    } else {
        settingBox.classList.remove("close-window")
    }
  }

const banner = document.querySelector(".security-banner")
const nav = document.querySelector("nav");
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  if(lastScrollY < window.scrollY) {
    nav.classList.add("nav-hidden")
    banner.classList.add("security-hidden")
  } else {
    nav.classList.remove("nav-hidden")
    banner.classList.remove("security-hidden")
  }

  lastScrollY = window.scrollY;
})