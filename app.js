let listaDeNumerosSorteados = [];
let numeroLimtite = 10;
let numeroSecreto = gerarNumeroAlatorio();
let tentativas = 1;
    
    function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
    function exibirMensagemInicial(){
        exibirTextoNaTela('h1', 'Jogo do Nùmero Secreto');
        exibirTextoNaTela('p', 'Escolha um Numero entre 1 e 10');
    }
exibirMensagemInicial(); 

        exibirTextoNaTela('h1', 'Jogo do Nùmero Secreto');
        exibirTextoNaTela('p', 'Escolha um Numero entre 1 e 10');

let chute = document.querySelector('input').value;

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled'); 
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++
        limparCampo();
    }
}

    function gerarNumeroAlatorio(){
       let numeroEscolhido = parseInt(Math.random() * numeroLimtite + 1);
       let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

        if (quantidadeDeElementosNaLista == numeroLimtite){
            listaDeNumerosSorteados = [];
        }

       if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAlatorio();
       } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
       }
}
    function limparCampo(){
        chute = document.querySelector('input');
        chute.value = ''; 
}
    function reiniciarJogo(){
        numeroSecreto = gerarNumeroAlatorio();
        limparCampo();
        tentativas = 1;
        exibirMensagemInicial();
        document.getElementById('reiniciar').setAttribute('disabled',true)
    }