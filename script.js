const slides = document.querySelectorAll(".banner-content");
let currentIndex = 0;
let intervalId;

const changeSlide = (direction) => {
  const currentSlide = slides[currentIndex];
  const nextIndex = (currentIndex + direction + slides.length) % slides.length;
  const nextSlide = slides[nextIndex];

  gsap.fromTo(currentSlide, { opacity: 1 }, { opacity: 0, duration: 1 });
  gsap.fromTo(nextSlide, { opacity: 0 }, { opacity: 1, duration: 1 });

  currentSlide.classList.remove("active");
  nextSlide.classList.add("active");

  currentIndex = nextIndex;
};

const autoPlay = () => {
  intervalId = setInterval(() => {
    changeSlide(1);
  }, 1500);
};

const stopAutoPlay = () => {
  clearInterval(intervalId);
};

const startAutoPlay = () => {
  autoPlay();
};

document.querySelector(".next-button").addEventListener("click", () => {
  stopAutoPlay();
  changeSlide(1);
  startAutoPlay();
});

document.querySelector(".prev-button").addEventListener("click", () => {
  stopAutoPlay();
  changeSlide(-1);
  startAutoPlay();
});

slides[currentIndex].classList.add("active");
autoPlay();

slides.forEach((slide) => {
  slide.addEventListener("mouseover", stopAutoPlay);
  slide.addEventListener("mouseout", startAutoPlay);
});
