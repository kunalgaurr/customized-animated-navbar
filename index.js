const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('shown');
    } else {
      entry.target.classList.remove('shown');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const hamburger = document.querySelector('.hamburger');
const bars = document.querySelectorAll('.bar');
const menu = document.querySelector('.hide');

const navbarSlideIn = () => {
  // hamburger.classList.toggle('cross');
  bars[0].classList.toggle('upperBar');
  bars[1].classList.toggle('lowerBar');
  menu.classList.toggle('show');
};

hamburger.addEventListener('click', navbarSlideIn);