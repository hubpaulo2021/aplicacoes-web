function nota() {
    let nota = window.prompt('Digite A Sua Nota ');

    nota = parseInt(nota);

    if (nota >= 7 && nota <= 10) {
        window.alert('Você Esta Aprovado!!🤙🏽 ')
    } else if (nota >= 5 && nota <= 6.9)
        window.alert('Você Esta De Recuperação ')


    else if (nota < 5 && nota >= 0) {
        window.alert(' voce esta reprovado ')

    } else {
        window.alert('nota  invalido! 👎🏽')
    } 
 }