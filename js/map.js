function aplicarDesconto(livros) {
    const desconto = 0.3;

    livroDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)};
    })
    return livroDesconto;
}