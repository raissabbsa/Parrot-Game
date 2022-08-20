
let qtdCartas;
let cont;
let cartaImpar;
let acertou;
let tempo;
let segundos;

function comparador() { 
	return Math.random() - 0.5; 
}

function IniciarJogo() {
    let contador = 0;
    let organizaCartas = [];
    let defineImagens = [];

    cont = 0;
    acertou = 0;
    segundos = 0;

    const cartoes = document.querySelector('.cartoes');
    cartoes.innerHTML ="";

    while (contador == 0) {
        qtd = prompt("Com quantas cartas você quer jogar?");

        if(qtd % 2 == 0 && qtd >= 4 && qtd <= 14) {
            contador = 1;
        }
    }
    
    qtdCartas = qtd;

    for(i=0 ; i < qtdCartas/2 ; i++) {
        for(let j = 0 ; j<2; j++)
            organizaCartas.push(i);
    }
    organizaCartas.sort(comparador);
    console.log(organizaCartas);

    defineImagens.push(`<img src="imagens/bobrossparrot.gif" />`);
    defineImagens.push(`<img src="imagens/explodyparrot.gif" />`);
    defineImagens.push(`<img src="imagens/fiestaparrot.gif" />`);
    defineImagens.push(`<img src="imagens/metalparrot.gif" />`);
    defineImagens.push(`<img src="imagens/revertitparrot.gif" />`);
    defineImagens.push(`<img src="imagens/tripletsparrot.gif" />`);
    defineImagens.push(`<img src="imagens/unicornparrot.gif" />`);

    for(let i=0 ; i < qtdCartas ; i++) {
        cartoes.innerHTML += `<div class="carta numero${organizaCartas[i]}" onclick="viraCarta(this)">
            <img src="imagens/front.png" />
            ${defineImagens[organizaCartas[i]]}
        </div>`;

    }

    tempo = setInterval(contadorTempo, 1000);
}

IniciarJogo();

function viraCarta(cartaVirada) {

    cartaVirada.classList.add('selecionado');
    cont++;

    if(cont%2==0){
        if(cartaImpar.className != cartaVirada.className) {
            setTimeout(remove, 1000, cartaVirada);
           
        }
        else {
            acertou++;
            if(acertou === qtdCartas/2) {
            setTimeout(finaliza, 500);
            }
        }
    }
    else {
        cartaImpar=cartaVirada;
    }   
}

function remove(cartaVirada) {

    cartaImpar.classList.remove('selecionado');
    cartaVirada.classList.remove('selecionado');
}

function finaliza() {

    clearInterval(tempo);

    let textoFinal = `Você ganhou em ${cont} jogadas e em ${segundos} segundos!`;

    alert(textoFinal);

    let resposta = prompt('Gostaria de reiniciar a partida?');

    if(resposta == "sim") {
        IniciarJogo();
    }
}

function contadorTempo() {

    segundos++;

    contaTempo = document.querySelector('.contador');

    contaTempo.innerHTML=segundos;
}
