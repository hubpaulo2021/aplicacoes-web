function calcularnumero(){
    let num1 = window.prompt('Digite o primeiro numero: ')
    let num2 = window.prompt('Digite o segundo numero: ')

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    let soma = num1 + num2;

    alert('A soma dos dois números é: '+soma)
}