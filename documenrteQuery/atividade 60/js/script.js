const botao = document.querySelector("#butao");

botao.addEventListener("click", function() {
    if (botao.textContent === "Ligar") {
        botao.textContent = "Desligar";

    }else {
        botao.textContent = "Ligar";
    }
})