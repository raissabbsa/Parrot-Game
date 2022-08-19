
let qtdCartas;

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


    for(let i=0 ; i < qtdCartas ; i++) {
        cartoes.innerHTML += `<div class="carta">
            <img src="imagens/front.png" />
        </div>`;

    }
}

IniciarJogo();
