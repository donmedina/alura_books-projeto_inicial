const botoes = document.querySelectorAll('.btn');

botoes.forEach(element => {
    element.addEventListener('click', evento => {
        filtrarLivrosFront(evento.target.value);
    })
});

function filtrarLivrosFront(filtro){
        const livrosFiltrados = filtro == 'disponivel' ? filtrarDisponiveis() : filtrarCategoria(filtro);
        let desconto = aplicarDesconto(livrosFiltrados);
        exibirLivros(desconto);

        if (filtro == 'disponivel'){
            const valorTotal = calcularValotTotal(livrosFiltrados);
            
            exibirValorTodosLivros(valorTotal);
        }
}

function filtrarCategoria(filtro) {
    return livros.filter(livro => livro.categoria == filtro);
}

function filtrarDisponiveis() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTodosLivros (valor){
    elementTodosOsLivros.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valor}</span></p>
    </div>   
    `
}