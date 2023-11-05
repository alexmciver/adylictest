const slides = document.querySelectorAll(".carousel-content");
let currentIndex = 0;

const changeSlide = (direction) => {
  const currentSlide = slides[currentIndex];
  const nextIndex = (currentIndex + direction + slides.length) % slides.length;
  const nextSlide = slides[nextIndex];

  // Use GSAP for the transition
  gsap.fromTo(currentSlide, { opacity: 1 }, { opacity: 0, duration: 1 });
  gsap.fromTo(nextSlide, { opacity: 0 }, { opacity: 1, duration: 1 });

  // Remove "active" class from current slide and add it to the next slide
  currentSlide.classList.remove("active");
  nextSlide.classList.add("active");

  currentIndex = nextIndex;
};

document
  .querySelector(".next-button")
  .addEventListener("click", () => changeSlide(1));
document
  .querySelector(".prev-button")
  .addEventListener("click", () => changeSlide(-1));

// Initially show the first slide
slides[currentIndex].classList.add("active");
