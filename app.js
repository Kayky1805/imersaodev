function pesquisar() {
let section = document.getElementById("resultados-pesquisa")

let resultados = ""

for (let dado of dados) {
    resultados += `
     <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">
              ${dado.descricao}<br>
              <a
                ${dado.informacao}</a
              >
            </p>
          </div>
`
}

section.innerHTML = resultados
console.log("foipourra")
};



