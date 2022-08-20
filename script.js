
let qtdCartas;
let organizaCartas = [];
let defineImagens = [];

function comparador() { 
	return Math.random() - 0.5; 
}

function IniciarJogo() {

    let cont = 0;

    while (cont == 0) {
        qtd = prompt("Com quantas cartas você quer jogar?");

        if(qtd % 2 == 0 && qtd >= 4 && qtd <= 14) {
            cont = 1;
        }
    }
    
    qtdCartas = qtd;

    console.log(qtdCartas);

    const cartoes = document.querySelector('.cartoes');

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
}

IniciarJogo();

function viraCarta(cartaVirada) {
    cartaVirada.classList.add('selecionado');
}

