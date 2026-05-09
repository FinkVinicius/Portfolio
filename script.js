/* MENU RESPONSIVO */
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function() {
    menu.classList.toggle("ativo");
});

/* formulario */
const form = document.getElementById("formContato");
const status = document.getElementById("statusEnvio");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nome === "" || email === "" || mensagem === "") {

        status.innerHTML = "Preencha todos os campos.";
        status.style.color = "red";

    } else if (!emailValido.test(email)) {

        status.innerHTML = "Digite um e-mail válido.";
        status.style.color = "red";

    } else {

        status.innerHTML = "Mensagem enviada com sucesso!";
        status.style.color = "green";

        form.reset();
    }

});