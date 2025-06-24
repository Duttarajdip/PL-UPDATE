// Initializing AOS
AOS.init();

const navCollapse = document.querySelector(".nav-collapse");
const navToggler = document.querySelector(".nav-toggler");

navToggler.addEventListener("click", () => {
  navCollapse.classList.toggle("active");
});
// Hero-swiper//
const swiper = new Swiper('#hero-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
// blog-swiper//
const blog = new Swiper('#blog-swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },

});

// VIEW FOR ALL PROPERTIES TOGGLE//
const propCollapse = document.querySelector(".propCollapse");

const allProp = document.querySelector(".all-prop");

allProp.addEventListener("click", () => {
  propCollapse.classList.toggle("active");
});

// LIVE COUNT SECTION//
const counters = document.querySelectorAll('.number');

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const suffix = counter.getAttribute('data-suffix') || '';
    const count = +counter.innerText;

    const increment = target / 1000;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment) + suffix;
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target + suffix;
    }
  };

  updateCount();
});
