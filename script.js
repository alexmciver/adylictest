const slides = document.querySelectorAll(".carousel-content");
let currentIndex = 0;

const changeSlide = (direction) => {
  slides[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + direction + slides.length) % slides.length;
  slides[currentIndex].classList.add("active");
};

document
  .querySelector(".next-button")
  .addEventListener("click", () => changeSlide(1));
document
  .querySelector(".prev-button")
  .addEventListener("click", () => changeSlide(-1));

// Initially show the first slide
slides[currentIndex].classList.add("active");
