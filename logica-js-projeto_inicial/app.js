alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = parseInt (Math.random() * 100 + 1);
console.log(numeroSecreto);
let numeroDigitado;
let tentativas = 1;

//enquanto o número digitado é diferente do número secreto
while (numeroDigitado != numeroSecreto) {
    numeroDigitado = prompt('Escolha um número entre 1 e 100');
    //se o número digitado for igual ao número secreto
    if (numeroSecreto == numeroDigitado) {
        break;
    } else {
        if (numeroSecreto > numeroDigitado) {
            alert(`O número secreto é maior que ${numeroDigitado}`);
        } else {
            alert(`O número secreto é menor ${numeroDigitado}`);
        }
        tentativas++;
        console.log(tentativas);
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);

//teste de commit