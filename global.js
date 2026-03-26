// ===== Formulário Contato =====
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contatoForm');
    const formMsg = document.getElementById('formMsg');

    if (form && formMsg) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const nome = form.querySelector('#nome').value.trim();
            const email = form.querySelector('#email').value.trim();
            const mensagem = form.querySelector('#mensagem').value.trim();

            if (!nome || !email || !mensagem) {
                formMsg.textContent = "⚠️ Preencha todos os campos!";
                return;
            }

            formMsg.textContent = "✅ Mensagem pronta para enviar! (Não envia de verdade)";
        });
    }
});
