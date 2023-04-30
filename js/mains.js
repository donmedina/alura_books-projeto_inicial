// requisiçoes

let livros = [];
const endpointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosAPI();

const secaoLivros = document.getElementById('livros');

async function getBuscarLivrosAPI(){
    const res = await fetch(endpointApi);
    livros = await res.json();
    exibirLivros(livros);
}

function exibirLivros(listaLivros) {
    listaLivros.forEach(element => {
        secaoLivros.innerHTML += `
        <div class="livro">
        <img class="livro__imagens" src="${element.imagem}" alt="${element.alt}" />
        <h2 class="livro__titulo">
          ${element.titulo}
        </h2>
        <p class="livro__descricao">${element.autor}</p>
        <p class="livro__preco" id="preco">R$ ${parseFloat(element.preco)}</p>
        <div class="tags">
          <span class="tag">${element.categoria}</span>
        </div>
      </div>            
        `
    });    
}
