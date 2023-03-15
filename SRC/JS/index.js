const botoesCarrossel = document.querySelectorAll('.botao');
// Passo 1- dar um jeito de pegar o elemento HTML dos botoes //
console.log(botoesCarrossel);

    const imagens = document.querySelectorAll('.imagem');

// Passo 2- dar um jeito de identificar o clique do usuario no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        console.log('clicou no botão');


// Passo 3- Desmarcar o botão selecionado anterior
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

// Passo 4- marcar o botão clicando como se tivesse selecionado
        botao.classList.add('selecionado');

// Passo 5- esconder a imagem ativa de fundo 
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

// Passo 6- Fazer aparecer imagem de fundo correspondente ao botão clicado
        imagens[indice].classList.add('ativa');

    })
})