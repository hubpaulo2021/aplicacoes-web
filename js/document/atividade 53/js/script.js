function calculemedia(){
    let num1 = parseFloat(document.getElementById("português").value);
    let num2 = parseFloat(document.getElementById("raciocinio logico").value);
    let num3 = parseFloat(document.getElementById("orientação a objeto").value);
    let num4 = parseFloat(document.getElementById("desenvolvedor web").value);
    let num5 = parseFloat(document.getElementById("desenvolvedor mobile").value);

    soma =num1 + num2 + num3 + num4 + num5;

    media = soma /5;

    document.getElementById('resultadomedia').innerText = 'A Média  das Notas é: ' + media;
}