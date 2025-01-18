function editarPerfil() {
    document.getElementById('profile-info').style.display = 'none'; // Ocultar dados
    document.getElementById('profile-edit').style.display = 'block'; // Exibir formulário de edição
}

// Função para cancelar a edição
function cancelarEdicao() {
    document.getElementById('profile-info').style.display = 'block'; // Exibir dados
    document.getElementById('profile-edit').style.display = 'none'; // Ocultar formulário de edição
}

// Função para salvar as alterações (exemplo)
function salvarAlteracoes() {
    // Obter dados do formulário de edição
    const nome = document.getElementById('edit-nome').value;
    const email = document.getElementById('edit-email').value;
    const endereco = document.getElementById('edit-endereco').value;

    // Atualizar as informações no perfil (simulação)
    document.querySelector('.profile-info p strong').textContent = "Nome: " + nome;
    document.querySelector('.profile-info p:nth-child(2) strong').textContent = "Email: " + email;
    document.querySelector('.profile-info p:nth-child(3) strong').textContent = "Endereço: " + endereco;

    // Fechar o formulário e voltar à visualização do perfil
    cancelarEdicao();

    // Aqui você pode enviar os dados para o servidor (AJAX, Fetch API)
    alert('Alterações salvas!');
}
// Função para alternar entre os formulários de login e cadastro
function toggleForm() {
    const loginForm = document.getElementById('login-form');
    const cadastroForm = document.getElementById('cadastro-form');

    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        cadastroForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        cadastroForm.style.display = 'block';
    }
}
function mostrarSenha() {
    var senhaInput = document.getElementById('senha');
    var iconeCadeado = document.getElementById('toggle-password');
    
    // Verifica o tipo do campo, se for 'password', muda para 'text' e vice-versa
    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';  // Torna a senha visível
        iconeCadeado.classList.remove('bi-lock-fill');
        iconeCadeado.classList.add('bi-unlock-fill'); // Troca o ícone para olho
    } else {
        senhaInput.type = 'password'; // Torna a senha invisível
        iconeCadeado.classList.remove('bi-unlock-fill');
        iconeCadeado.classList.add('bi-lock-fill'); // Troca o ícone para cadeado
    }
}
