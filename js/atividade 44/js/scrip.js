function calcule(){
    let num1 = window.prompt('Digite O Primeiro Numero')
    let num2 = window.prompt('Digite O Segundo Numero')

    num1 = parseFloat (num1);
    num2 = parseFloat (num2);

    let calcule = num1 - num2;
    
    alert ('O Resultado Da Subtracao e: '+calcule) 
}