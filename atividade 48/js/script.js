function num() {
    let num = window.prompt('Digite Qualquer Número!! ');

    num = parseFloat(num);

    if (num % 2 == 0) {
        window.alert('numero par')

    } else {
        window.alert('numero impar')

    }
}