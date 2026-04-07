const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('.theme-icon');
const body = document.body;

themeToggle.addEventListener('click', () => {
    // Evento que, ao clicar, muda para modo dark
    body.classList.toggle('dark-mode');
    
    // Troca o ícone conforme o modo
    if (body.classList.contains('dark-mode')) {
        themeIcon.textContent = '☀️'; // Sol para voltar ao claro
    } else {
        themeIcon.textContent = '🌙'; // Lua para voltar ao escuro
    }
});

// Validações solicitadas

document.querySelector('form').addEventListener('submit', function(e) {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    
    // Validação 1: Nome com pelo menos 3 caracteres
    if (nome.length < 3) {
        alert("Por favor, digite seu nome completo.");
        e.preventDefault(); // Impede o envio do formulário
        return;
    }

    // Validação 2: Verificar se o e-mail contém '@'
    if (!email.includes('@')) {
        alert("Digite um e-mail válido.");
        e.preventDefault();
        return;
    }
    
    alert("Pedido enviado com sucesso! (Simulação)");
});