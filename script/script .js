/*Desenvolver três códigos Java Script, para às seguintes estruturas da interface da avaliação anterior da Space X, feita por alunos da disciplina e adaptada para essa atividade:
JS (Menu Hamburger) - para ativar e desativar o menu responsivo - 1,0 ponto
JS (Slideshow de Images) - para dar funcionalidade aos dots do banner MARS & BEYOND, mudando para as imagens (banner_02.png e banner_03.png) em anexo na pasta imagens  - 2,0 pontos
JS (MODAL) - para ativar e desativar o Modal (astronaut presente no HTML) por meio do formulário - 2,0 pontos
Para a atividade pesquisem no https://www.w3schools.com/ uma solução para o código dado, os tópicos acima foram visto em sala. A ideia é dar funcionalidade às estruturas do HTML e CSS da página através do JavaScript.
Não é permitido mudar as estruturas, HTML e CSS, mas vocês podem ajustar o código para ficar mais bonito, mas não mudem ID e Classes e nem as imagens.
Seguem em anexo os arquivos HTML, CSS e as imagens. Quando terminarem postem o arquivo .zip com o site atualizado. 
Vocês terão até o /*Desenvolver três códigos Java Script, para às seguintes estruturas da interface da avaliação anterior da Space X, feita por alunos da disciplina e adaptada para essa atividade:
JS (Menu Hamburger) - para ativar e desativar o menu responsivo - 1,0 ponto
JS (Slideshow de Images) - para dar funcionalidade aos dots do banner MARS & BEYOND, mudando para as imagens (banner_02.png e banner_03.png) em anexo na pasta imagens  - 2,0 pontos
JS (MODAL) - para ativar e desativar o Modal (astronaut presente no HTML) por meio do formulário - 2,0 pontos
Para a atividade pesquisem no https://www.w3schools.com/ uma solução para o código dado, os tópicos acima foram visto em sala. A ideia é dar funcionalidade às estruturas do HTML e CSS da página através do JavaScript.
Não é permitido mudar as estruturas, HTML e CSS, mas vocês podem ajustar o código para ficar mais bonito, mas não mudem ID e Classes e nem as imagens.
Seguem em anexo os arquivos HTML, CSS e as imagens. Quando terminarem postem o arquivo .zip com o site atualizado. 
Vocês terão até o dia 09/06  às 23:59, para finalizar. 
Sucesso na atividade... */

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
});dia 09/06  às 23:59, para finalizar. 
Sucesso na atividade... */
