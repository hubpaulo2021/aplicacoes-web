function calcule (){
    let num1 = window.prompt('Digite o Primeiro Numero')
    let num2 = window.prompt('Digite o Segundo Numro')
    let num3 = window.prompt('Digite o Terceiro Numero')


    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    num3 = parseFloat(num3);

    let calcule = num1 * num2 * num3;

    alert (`O Resultado da multiplicao e: `+calcule)


}