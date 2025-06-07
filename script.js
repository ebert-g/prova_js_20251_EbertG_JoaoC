
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav        = document.querySelector('.desktop-nav');

  function resetNav() {
    if (window.innerWidth <= 1130) {
      nav.style.display = 'none';
    } else {
      nav.style.display = '';
    }
  }
  resetNav();

  menuToggle.addEventListener('click', () => {
    const isOpen = nav.style.display === 'block';
    nav.style.display = isOpen ? 'none' : 'block';
  });

const mbSection = document.querySelector('.mars-beyond');
const dots     = document.querySelectorAll('.dots .dot');

function changeBg(dot) {
  const imgFile = dot.dataset.bg;
  mbSection.style.backgroundImage = `url('images/${imgFile}')`;
  dots.forEach(d => d.classList.toggle('active', d === dot));
}

dots.forEach(dot => {
  dot.addEventListener('click', () => changeBg(dot));
});

if (dots.length) changeBg(dots[0]);
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form-section form");
  const modal = document.getElementById("id01");
  const closeBtn = document.querySelector(".close");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});