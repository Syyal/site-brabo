// Validação do Formulário
document.getElementById('contactForm').onsubmit = function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorMessage = document.getElementById('error-message');

    if (!name || !email || !message) {
        errorMessage.classList.remove('hidden');
        event.preventDefault();
    } else {
        errorMessage.classList.add('hidden');
    }
};

// Recuperação de Dados no formAction.html
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const email = urlParams.get('email');
    const message = urlParams.get('message');

    if (name && email && message) {
        const responseMessage = document.getElementById('responseMessage');
        responseMessage.innerHTML = `Obrigado, ${name}. Recebemos sua mensagem: <br><br> "${message}" <br><br> Retornaremos em breve no e-mail: ${email}.`;
    }
};
