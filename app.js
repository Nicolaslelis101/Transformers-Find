function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");
    console.log(section);

    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();
    console.log(campoPesquisa);

    if(campoPesquisa === ""){
        section.innerHTML = "<p>Nenhum resultado encontrado!</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    let imagem = "";

    for(let dado of dados){
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        imagem = dado.imagem;

        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado">
                <h2>${titulo}</h2>
                <p class="descricao-meta">${descricao}</p>
                <img src="${imagem}" alt="${titulo}" class="imagem-personagem">
            </div>
            `;
        }
    }

    if(resultados === ""){
        section.innerHTML = "<p>Nenhum resultado encontrado!</p>";
        return;
    }

    section.innerHTML = resultados;
}
