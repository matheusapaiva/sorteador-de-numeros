function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let num_inicial = parseInt(document.getElementById('de').value);
    let num_final = parseInt(document.getElementById('ate').value);

// Fazendo a verificação*

if (num_inicial > num_final) {

alert(`Erro! O número inserido no campo "Do número" é maior do que "Até o número". Tente novamente`)
reiniciar();
alterarStatusBtn();
return

}
 
    // Vamos recomeçar a estrutra para gerar a o números de acordo com a quantidade inserida pelo usuário

    // Criando um array para guardar os números sorteados

    let sorteados = [];
    let numero;
   
    
         // Criando um laço para percorrer dentre os números escolhidos

        for (let i = 0; i < quantidade; i++) {
        numero = gerarNumeroAleatorio(num_inicial, num_final);

        // Utilizar o while para, equanto o número sorteado já estiver no array ele precisará gerar outro número

            while (sorteados.includes(numero)) {
            numero = gerarNumeroAleatorio(num_inicial, num_final);
                
        }

        sorteados.push(numero);
        }

    // Fazer o output do array na página, ao invés de usar o alert

    let resultado = document.getElementById('resultado');

    // Para colocar esse elemento no HTML é necessário utilizar .innerHTML

    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`

    // Vamos alterar a classe do botão 
    alterarStatusBtn();

    // Conferir se os números estão sendo levados para o array

    // alert(sorteados);

    // Retorno de apenas um número de acordo com o intervalo escolhido

    // let numero = gerarNumeroAleatorio(num_inicial, num_final);
    // alert(numero);

    // Testando o retorno dos elementos

    // alert(`Quantidade: ${quantidade}`);
    // alert(`Do número: ${num_inicial}`);
    // alert(`Até o número: ${num_final}`);
}


function gerarNumeroAleatorio(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBtn() {
    let botao = document.getElementById('btn-reiniciar');

    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

// Reiniciar o programa
    // reiniciar();

function reiniciar() {
    document.getElementById('quantidade').value = ' ';
    document.getElementById('de').value = ' ' ;
    document.getElementById('ate').value = ' ';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusBtn();

}