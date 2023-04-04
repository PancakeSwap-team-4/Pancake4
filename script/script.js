const slides = document.querySelectorAll(".slide");
const carousel = document.querySelector(".carousel");
const indicators = document.querySelectorAll(".indicator");
let currentIndex = 0;

function goToSlide(index) {
  if (index < 0 || index >= slides.length) return;

  carousel.style.transform = `translateX(-${index * 20}%)`;

  slides[currentIndex].classList.remove("active");
  indicators[currentIndex].classList.remove("active");

  slides[index].classList.add("active");
  indicators[index].classList.add("active");

  currentIndex = index;
}

function nextSlide() {
  const nextIndex = (currentIndex + 1) % slides.length;
  goToSlide(nextIndex);
}

setInterval(nextSlide, 100000000);

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    goToSlide(index);
  });
});

var frameworkAnimation = document.querySelector(".framework-light");
var isAnimating = true;

function loopAnimation() {
  if (!isAnimating) {
    frameworkAnimation.style.animationPlayState = "running";
    isAnimating = true;
  } else {
    frameworkAnimation.style.animationPlayState = "paused";
    isAnimating = false;
  }
}
const loopInterval = setInterval(loopAnimation, 5000);
