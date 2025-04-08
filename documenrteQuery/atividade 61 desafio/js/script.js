function submit() {
    let usuario = window.alert('Digite seu usuario');
    let senha = window.alert('Digite sua senha');

    usuario = parseFloat(usuario);
    senha = parseFloat(senha);

    if (nome.value == "") {
        alert("informer o seu nome")
    } else if (senha.value == "") {
        alert("informe sua senha")
    }else{
        location.assign("http://127.0.0.1:5500/documenrteQuery/atividade%2061%20desafio/tela1.html")
    }
}

    