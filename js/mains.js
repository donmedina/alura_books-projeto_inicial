// requisiçoes

let livros = [];
const endpointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosAPI();

async function getBuscarLivrosAPI(){
    const res = await fetch(endpointApi);
    livros = await res.json();
    const descontoLivro = aplicarDesconto(livros);
    exibirLivros(descontoLivro);
}

