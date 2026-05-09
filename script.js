/* MENU RESPONSIVO */
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function() {
    menu.classList.toggle("ativo");
});

/* validação do formulario */
const form = document.getElementById("formContato");
const status = document.getElementById("statusEnvio");

form.addEventListener("submit", function(event) {
    // Impede o recarregamento da página ao clicar no botão de enviar
    event.preventDefault();
    
    // pega os valores dos inputs e remove espaços extras
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    //molde pra validação
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // verifica se tem algum campo vazio 
    if (nome === "" || email === "" || mensagem === "") {

        status.innerHTML = "Preencha todos os campos.";
        status.style.color = "red";
    //testa se o e-mail é valido
    } else if (!emailValido.test(email)) {

        status.innerHTML = "Digite um e-mail válido.";
        status.style.color = "red";
    // Caso todos os requisitos sejam atendidos mostra que enviou na tela e limpa os forms
    } else {

        status.innerHTML = "Mensagem enviada com sucesso!";
        status.style.color = "green";

        form.reset();
    }

});