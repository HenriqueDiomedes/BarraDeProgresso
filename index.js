let valorBarra = document.querySelector('.valor_barra');
let barra = document.querySelector('.barra');

let segundos = 0;
let tempoTotal = 60;

let cores = ["rgb(78, 236, 20)", "rgb(20, 78, 236)", "rgb(255, 06, 0)"];
let corAtual = 0;
let progresso = setInterval(() => {
    segundos++;
    valorBarra.textContent = `${segundos}s`;
    barra.style.background = `conic-gradient(${cores[corAtual]} ${segundos * (360 / tempoTotal)}deg, rgb(230, 244, 244) 0deg)`;
    if(segundos === tempoTotal){
        segundos = 0;
        corAtual = (corAtual + 1) % cores.length;
    }
},1000);