document.addEventListener("DOMContentLoaded", () => {

  const slides = document.querySelector(".slides");
  const slide = document.querySelectorAll(".slide");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");

  let index = 0;
  const totalSlides = slide.length;

  function showSlide() {
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  next.addEventListener("click", () => {
    index = (index + 1) % totalSlides;
    showSlide();
  });

  prev.addEventListener("click", () => {
    index = (index - 1 + totalSlides) % totalSlides;
    showSlide();
  });

  /* Swipe Support */
  let startX = 0;

  slides.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  slides.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;
    let diff = startX - endX;

    if (diff > 50) index++;
    if (diff < -50) index--;

    if (index >= totalSlides) index = 0;
    if (index < 0) index = totalSlides - 1;

    showSlide();
  });

});

