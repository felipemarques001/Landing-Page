// PEGANDO AS VARIÁVEIS
const menu = document.getElementById('menuHamburger');
const ul = document.getElementById('ul');
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const body = document.querySelector('body');

// FUNÇÃO PARA ABRIR O MENU QUANDO O HAMBURGUER FOR CLICADO
function AbrirMenu(){
    ul.classList.toggle('active')
    line1.classList.toggle('active-button-line1');
    line2.classList.toggle('active-button-line2');
    line3.classList.toggle('active-button-line3');

    MudarBody();
}

// FUNÇÃO PARA COLOCAR O OVERFLOW NO BODY
function MudarBody(){
    body.classList.toggle('overflowBody')
}

// FUNÇÃO PARA FECHAR O MENU QUANDO O LINK FOR SELECIONADO
function fecharMenu(){
    ul.classList.toggle('active')
    line1.classList.toggle('active-button-line1');
    line2.classList.toggle('active-button-line2');
    line3.classList.toggle('active-button-line3');
}

menu.addEventListener('click', AbrirMenu);