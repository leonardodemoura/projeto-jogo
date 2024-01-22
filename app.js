alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
console.log(numeroSecreto);
let chute;
let tentativas = 1;
let jogoCancelado = false; // Adicione uma variável para controlar se o jogo foi cancelado

// enquanto chute não for igual ao n.s
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');

    // Verificar se o botão "Cancelar" foi pressionado
    if (chute === null) {
        // Lidar com a situação de cancelamento (pode interromper o jogo, por exemplo)
        alert('Jogo cancelado.');
        document.querySelector('.container__cancelamento').style.display = 'block';
        document.querySelector('.container__conteudo').style.display = 'none'; // Oculta a div principal
        jogoCancelado = true; // Define a variável jogoCancelado como true
        break;  // Interrompe o loop
    }

    // Convertendo o valor digitado para número
    chute = parseInt(chute);

    // se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

// Verifica se o jogo foi cancelado antes de exibir a mensagem de vitória
if (!jogoCancelado) {
    if (tentativas > 1) {
        alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
    } else {
        alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
    }
}
