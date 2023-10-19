class Hero{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    attack(){
        let ataque = ""
        switch (this.tipo){
            case "mago":
                ataque = "magia"
                break
            case "guerreiro":
                ataque = "espada"
                break
            case "monge":
                ataque = "artes marciais"
                break
            case "ninja":
                ataque = "shuriken"
                break
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

let jogador = new Hero("Natsu", 18, "mago")
jogador.attack()
