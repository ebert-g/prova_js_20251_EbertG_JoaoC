document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".desktop-nav");

    function ajustarNavegacao() {
        if (window.innerWidth <= 1130) {
            nav.style.display = "none";
        } else {
            nav.style.display = "";
        }
    }
    ajustarNavegacao();
    window.addEventListener("resize", ajustarNavegacao);

    menuToggle.addEventListener("click", () => {
        const estaAberto = window.getComputedStyle(nav).display !== "none";
        nav.style.display = estaAberto ? "none" : "block";
    });

    const mbSection = document.querySelector(".mars-beyond");
    const dots = document.querySelectorAll(".dots span");

    function alterarFundo(dot) {
        const imgFile = dot.dataset.bg;
        mbSection.style.backgroundImage = `url('images/${imgFile}')`;
        dots.forEach((d) => d.classList.toggle("active", d === dot));
    }

    dots.forEach((dot) => {
        dot.addEventListener("click", () => alterarFundo(dot));
    });

    if (dots.length) alterarFundo(dots[0]);
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

document.addEventListener("DOMContentLoaded", function () {
    const dots = document.querySelectorAll(".dots span");
    const marsSection = document.querySelector(".mars-beyond");

    dots.forEach((dot) => {
        dot.addEventListener("click", () => {
            const img = dot.getAttribute("data-bg");

            marsSection.style.backgroundImage = `url('images/${img}')`;
            dots.forEach((d) => d.classList.remove("active"));

            dot.classList.add("active");

            console.log(`Fundo trocado para ${img} e bolinha ativada.`);
        });
    });
});
