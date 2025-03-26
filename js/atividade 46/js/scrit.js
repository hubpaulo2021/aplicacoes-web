function maior(){
    let idade = window.prompt('Digite Sua Idade')

    idade = parseInt (idade);

    if (idade >= 18) {
        alert('Voce é Maior De Idade')
    }
    else{
        alert ('Voce é Menor De Idade ')
    }
}