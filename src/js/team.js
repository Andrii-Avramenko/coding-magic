
  document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".team-slide");
    const dots = document.querySelectorAll(".slide-div");
    const leftArrow = document.querySelector(".arrow.left");
    const rightArrow = document.querySelector(".arrow.right");

    let currentIndex = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    }

    if (leftArrow && rightArrow) {
      leftArrow.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
      });

      rightArrow.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
      });
    }


    showSlide(currentIndex);
  });
