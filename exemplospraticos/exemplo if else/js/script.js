function maioridade() {
    let idade = window.prompt('Digite a Sua idade: ')

    idade = parseFloat(idade);
    if (idade >= 18) {
        alert('Voce e maior de idade')
    }
    else {
        alert('Desculpe, Voce e menor de idade')
    }
}