function numerointeiro(){
    let numerointeiro = window.prompt('Digite Um Número!! ')

    numerointeiro = parseInt (numerointeiro);

    if (numerointeiro>0){
       window.alert(`O número, ${numerointeiro} é positivo!🤙🏽🤙🏽`);
    }

    else if (numerointeiro <0){
        window.alert(`O numero, ${numerointeiro} é negativo!👎🏽👎🏽`);
    }

    else if (numerointeiro == 0){
        alert('O numero zero');
    }
    else{
        alert('numero invalido');
    }
}