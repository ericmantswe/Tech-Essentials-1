document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    toggle.classList.toggle("active");
  });

  // Testimonial Slider
  const testimonials = document.querySelectorAll(".testimonial");
  let current = 0;

  function showTestimonial(index) {
    testimonials.forEach((t, i) => {
      t.style.display = i === index ? "block" : "none";
    });
  }

  function nextTestimonial() {
    current = (current + 1) % testimonials.length;
    showTestimonial(current);
  }

  showTestimonial(current);
  setInterval(nextTestimonial, 4000);
});

let slider = setInterval(nextTestimonial, 4000);

const sliderContainer = document.querySelector('.testimonial-slider');
sliderContainer.addEventListener('mouseenter', () => clearInterval(slider));
sliderContainer.addEventListener('mouseleave', () => {
  slider = setInterval(nextTestimonial, 4000);
});

