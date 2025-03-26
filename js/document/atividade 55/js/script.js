function soma() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    somar = num1 + num2;

    if (somar){
        document.getElementById("resultado").innerText = ' O resultado da Soma é: ' + somar;
    }else {
        document.getElementById("resultado").innerText = ' numero invalido ';
    }
    
}


function subtracao() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    subtração = num1 - num2;
    if (subtração){
        document.getElementById("resultado").innerText = ' O Resultado da subtração: ' + subtração
    }else if(subtração == 0){
        document.getElementById("resultado").innerText = ' O Numero é: 0 '; 
    }else{
        document.getElementById("resultado").innerText = ' calculo invalido '; 
    }


    

}
function multiplicacao() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    multiplicação = num1 * num2;

    if (multiplicação){
        document.getElementById("resultado").innerText = ' O Resultado da Multiplicação: ' + multiplicação;
    }else{
        document.getElementById("resultado").innerText = ' Calculo invalido: ';
    }
}
function divisao() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    divisão = num1 / num2;

    if (divisão){
        document.getElementById("resultado").innerText = ' O Resultado da Divisão: ' + divisão;
        }else{
            document.getElementById("resultado").innerText = ' calculo invalido: ';
        }
}