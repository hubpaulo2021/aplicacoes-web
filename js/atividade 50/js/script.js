function comparacao() {
    let num1 = window.prompt('Digite O Primeiro Número!! ');
    let num2 = window.prompt('Digite O Segundo Número!! ');

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (num1 > num2){
        window.alert('O Primeiro Número é Maior')
    }else if (num1 < num2)
        window.alert('O Segundo Número é Maior')

    else if (num1 == num2 ){
        window.alert('Os Dois Números São Iguais')
    }
    else {
        window.alert('Número invalido')
    }

}