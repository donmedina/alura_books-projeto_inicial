const botoes = document.querySelectorAll('.btn');

botoes.forEach(element => {
    element.addEventListener('click', evento => {
        filtrarLivrosFront(evento.target.value);
    })
});


function filtrarLivrosFront(filtro){
        const livrosFiltrados = filtro == 'disponivel' ? livros.filter (livro => livro.quantidade > 0 ) : livros.filter(livro => livro.categoria == filtro)
        exibirLivros(livrosFiltrados);
}