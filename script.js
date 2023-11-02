const slideWrapper = document.querySelector(".carousel-wrapper");
const slides = document.querySelectorAll(".carousel-slide");
const slideWidth = slides[0].offsetWidth;
let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}

function previousSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
}

function updateCarousel() {
  gsap.to(slideWrapper, { x: -currentIndex * slideWidth, duration: 0.5 });
}

document.querySelector(".next-button").addEventListener("click", nextSlide);
document.querySelector(".prev-button").addEventListener("click", previousSlide);
