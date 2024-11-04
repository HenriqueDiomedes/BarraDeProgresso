let barra = document.querySelector('.barra');
let relogio = document.querySelector('.relogio');

let tempoTotal = 60; // Total de segundos para completar o círculo

// Lista de cores para alternar a cada minuto
let cores = ["rgb(78, 236, 20)", "rgb(236, 78, 20)", "rgb(20, 78, 236)", "rgb(255, 206, 0)"];
let corAtual = 0;

// Função para atualizar o relógio
function atualizarRelogio() {
    let agora = new Date();
    let horas = agora.getHours().toString().padStart(2, '0');
    let minutos = agora.getMinutes().toString().padStart(2, '0');
    let segundos = agora.getSeconds().toString().padStart(2, '0');
    relogio.textContent = `${horas}:${minutos}:${segundos}`;

    // Atualiza o ângulo da barra de progresso com base nos segundos
    let angulo = segundos * (360 / tempoTotal);
    barra.style.background = `conic-gradient(${cores[corAtual]} ${angulo}deg, rgb(230, 244, 244) 0deg)`;

    // Muda para a próxima cor ao completar um minuto
    if (segundos == 0) {
        corAtual = (corAtual + 1) % cores.length;
    }
}

// Atualiza o relógio e a barra de progresso a cada segundo
setInterval(atualizarRelogio, 1000);
