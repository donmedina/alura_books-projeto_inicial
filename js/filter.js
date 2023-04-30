const botoes = document.querySelectorAll('.btn');

botoes.forEach(element => {
    element.addEventListener('click', evento => {
        filtrarLivrosFront(evento.target.value);
    })
});


function filtrarLivrosFront(filtro){
    if (filtro == ''){
        exibirLivros(livros);
    }else{
        const livrosFiltrados = livros.filter(livro => livro.categoria == filtro)
        exibirLivros(livrosFiltrados);
    }
}