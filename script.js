const slides = document.querySelectorAll(".slide");
let currentIndex = 0;
let autoplayInterval;

const changeSlide = (direction) => {
  gsap.to(slides[currentIndex], { opacity: 0, duration: 1 });
  currentIndex = (currentIndex + direction + slides.length) % slides.length;
  gsap.to(slides[currentIndex], { opacity: 1, duration: 1 });

  // Remove "active" class from all slides
  slides.forEach((slide) => slide.classList.remove("active"));

  // Add the "active" class to the next slide
  slides[currentIndex].classList.add("active");
};

document
  .querySelector(".next-button")
  .addEventListener("click", () => changeSlide(1));
document
  .querySelector(".prev-button")
  .addEventListener("click", () => changeSlide(-1));

// Initially show the first slide and add the "active" class
slides[currentIndex].classList.add("active");
gsap.set(slides[currentIndex], { opacity: 1 });

const startAutoPlay = () => {
  autoplayInterval = setInterval(() => changeSlide(1), 1500); // Each slide will last for 1.5 seconds
};

const stopAutoPlay = () => {
  clearInterval(autoplayInterval);
};

startAutoPlay(); // Start autoplay initially

// Pause autoplay on slide hover
slides.forEach((slide) => {
  slide.addEventListener("mouseenter", stopAutoPlay);
  slide.addEventListener("mouseleave", startAutoPlay);
});
