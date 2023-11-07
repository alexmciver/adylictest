const slides = document.querySelectorAll(".banner-content");
let currentIndex = 0;
let intervalId;
const fadeDuration = 0.5; // Adjust the duration for smoother transition (in seconds)

const changeSlide = (direction) => {
  const currentSlide = slides[currentIndex];
  const nextIndex = (currentIndex + direction + slides.length) % slides.length;
  const nextSlide = slides[nextIndex];

  gsap.to(currentSlide, { opacity: 0, duration: fadeDuration });
  gsap.fromTo(
    nextSlide,
    { opacity: 0 },
    { opacity: 1, duration: fadeDuration }
  );

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

slides[currentIndex].classList.add("active");
autoPlay();

slides.forEach((slide) => {
  slide.addEventListener("mouseover", stopAutoPlay);
  slide.addEventListener("mouseout", startAutoPlay);
});
