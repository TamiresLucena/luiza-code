class Bomba {
    constructor(capacidade, preco) {
        this.capacidade = capacidade;
        this.preco = preco;
    }

    consultar() {
        return this.capacidade;
    }

    encher() {
        this.capacidade = 100;
    }

    alterarValor(novoPreco) {
        this.preco = novoPreco <= 0 ? preco : novoPreco;
    }

    abastecer(qtdLitros) {
        if (qtdLitros <= this.capacidade) {
            console.log('Abatecimento de', qtdLitros, 'custou', qtdLitros * this.preco);

        }
        else console.log('Não há quantidade de livros suficiente para este abastecimento!')
    }

}


const bomba = new Bomba(10, 150);
console.log('Capacidade:', bomba.capacidade, '- Preço:', bomba.preco)

bomba.alterarValor(15)
console.log('Capacidade:', bomba.capacidade, '- Preço:', bomba.preco)

console.log('Capacidade: ', bomba.consultar())

bomba.abastecer(9)


