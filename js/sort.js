let ordPreco = document.getElementById('btnOrdenarPorPreco');

ordPreco.addEventListener('click', ordenarLivros);

function ordenarLivros(){
    let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco);
    let desconto = aplicarDesconto(livrosOrdenados)
    exibirLivros(desconto);
}