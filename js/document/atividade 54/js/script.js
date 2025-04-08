function diferenca(){
    let numero1 = parseFloat(document.getElementById("num1").value);
    let numero2 = parseFloat(document.getElementById("num2").value);

    diferença = numero1 - numero2 ;
   

    document.getElementById('resultado').innerText = 'A diferença é: ' + diferença;
}