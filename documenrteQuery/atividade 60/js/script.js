const botao = document.querySelector("#butao");

botao.addEventListener("click", function() {
    if (botao.textContent === "Desligar") {
        botao.textContent = "Ligar";

    }else {
        botao.textContent = "Desligar";
    }
})