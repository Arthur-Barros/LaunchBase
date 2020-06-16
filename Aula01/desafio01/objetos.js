const usuario = {
    nome: "Rocketseat",
    cor: "Roxo",
    foco: "Programação",
    endereco: {
        rua: "Rua Guilherme Gembala",
        numero: "260"
    }
}

//  A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260

console.log(`A empresa ${usuario.nome} está localizada em ${usuario.endereco.rua}, ${usuario.endereco.numero}.`)