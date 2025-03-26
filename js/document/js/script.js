function somar(){
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    soma = num1 + num2;

    document.getElementById('resultado'). innerText = 'a soma é: '+soma;
}