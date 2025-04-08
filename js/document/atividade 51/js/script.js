function multiplique() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    calcule = num1 * num2;

    document.getElementById('resultado').innerText = 'O resultado da Multiplicação é: ' + calcule;
}