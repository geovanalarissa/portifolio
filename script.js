document.addEventListener("DOMContentLoaded", function() {

    const botaoTema = document.getElementById("toggleTheme");
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }

  
    botaoTema.addEventListener("click", function() {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            botaoTema.textContent = "☀️ Modo Claro";
        } else {
            localStorage.setItem("theme", "light");
            botaoTema.textContent = "🌙 Modo Escuro";
        }
    });const botaoTema = document.getElementById("toggleTema");

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }

    botaoTema.addEventListener("click", function() {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            botaoTema.textContent = "☀️ Modo Claro";
        } else {
            localStorage.setItem("theme", "light");
            botaoTema.textContent = "🌙 Modo Escuro";
        }
    });

    document.getElementById("form").addEventListener("submit", function(event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem");

        if (nome === "" || telefone === "" || email === "") {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        const regexTelefone = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;
        if (!regexTelefone.test(telefone)) {
            alert("Digite um telefone válido. Ex: (81) 99999-9999");
            return;
        }

        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            alert("Digite um email válido.");
            return;
        }

        mensagem.textContent = "Formulário enviado com sucesso!";
        mensagem.style.color = "green";
    });


});
