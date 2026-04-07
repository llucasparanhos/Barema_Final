// Lógica do Tema Dark Mode
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('.theme-icon');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeIcon.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Validação do Formulário
document.getElementById('formEncomenda').addEventListener('submit', function(e) {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const tel = document.getElementById('tel').value.trim();
    const data = document.getElementById('data').value;
    const pedido = document.getElementById('pedido').value.trim();

    // 1. Validação Nome (mínimo 3 letras e deve conter espaço/sobrenome)
    if (nome.length < 3 || !nome.includes(' ')) {
        alert("Por favor, digite seu nome completo.");
        e.preventDefault();
        return;
    }

    // 2. Validação E-mail (formato padrão)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        e.preventDefault();
        return;
    }

    // 3. Validação Telefone (mínimo de dígitos para celular com DDD)
    if (tel.replace(/\D/g, '').length < 10) {
        alert("Por favor, insira um telefone válido com DDD (ex: 71 99999-9999).");
        e.preventDefault();
        return;
    }

    // 4. Validação Data (Não permite datas passadas)
    const dataSelecionada = new Date(data);
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    if (!data) {
        alert("Por favor, selecione a data desejada para a entrega.");
        e.preventDefault();
        return;
    } else if (dataSelecionada < hoje) {
        alert("Ops! Não conseguimos entregar em datas passadas. Escolha uma data futura.");
        e.preventDefault();
        return;
    }

    // 5. Validação Pedido
    if (pedido.length < 10) {
        alert("Por favor, descreva o seu pedido com um pouco mais de detalhes.");
        e.preventDefault();
        return;
    }
    
    alert("Pedido enviado com sucesso! Eli entrará em contato em breve.");
});