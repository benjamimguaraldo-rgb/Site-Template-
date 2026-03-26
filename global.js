document.addEventListener("DOMContentLoaded", () => {

    // ===== Highlight página ativa =====
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });

    // ===== Formulário =====
    const form = document.getElementById("contatoForm");
    const msg = document.getElementById("formMsg");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();

            if (!nome || !email || !mensagem) {
                msg.textContent = "Preencha todos os campos.";
                msg.style.color = "red";
                return;
            }

            msg.textContent = "Mensagem enviada (simulação).";
            msg.style.color = "#00ff88";
            form.reset();
        });
    }

});
