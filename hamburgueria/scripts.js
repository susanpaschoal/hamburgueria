const modal = document.querySelector(".modal")
const mascara = document.querySelector(".mascara-modal")

function abrirModal(){
    modal.style.left = '50%'
    mascara.style.visibility = 'visible'
}

function esconderModal (){
    modal.style.left = '-300%'
    mascara.style.visibility = 'hidden'

}
// Seleciona o botão de toggle e o menu de navegação
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav');

// Adiciona um evento de clique ao botão de toggle
menuToggle.addEventListener('click', () => {
    // Alterna a classe 'open' no menu de navegação
    navMenu.classList.toggle('open');
});




function togglePagamento() {
    const cartBox = document.getElementById('cart-box');
    const paymentDeli = document.getElementById('payment-delivery-container');

    if (cartBox.style.display === 'none') {
        cartBox.style.display = 'block';
        paymentDeli.style.display = 'none';
         paymentDeliv.style.display = 'none';
    } else {
        cartBox.style.display = 'none';
        paymentDeli.style.display = 'block';
        paymentDeliv.style.display = 'block';
    }
}
function togglePaymentFields() {
    const paymentMethod = document.getElementById('payment-method').value;
    const cardDetails = document.getElementById('card-details');
    const pixDetails = document.getElementById('pix-details');
    const cashDetails = document.getElementById('cash-details');

    cardDetails.style.display = 'none';
    pixDetails.style.display = 'none';
    cashDetails.style.display = 'none';

    if (paymentMethod === 'credit' || paymentMethod === 'debit') {
        cardDetails.style.display = 'block';
    } else if (paymentMethod === 'pix') {
        pixDetails.style.display = 'block';
    } else if (paymentMethod === 'cash') {
        cashDetails.style.display = 'block';
    }
}
function abrirCarrinho() { window.location.href = 'carrinho.html'; // Redireciona para a página do carrinho 
    }
    function voltarParaPaginaPrincipal() { window.location.href = 'index.html'; // Redireciona de volta para a página principal }
    }

function mostrarDetalhes(nome, imagem, descricao, preco) {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <section class="caixa-detalhes">
            <div class="detalhes-container">
                <div class="detalhes-imagem">
                    <img src="${imagem}" alt="${nome}">
                </div>
                <div class="detalhes-texto">
                    <h3>${nome}</h3>
                    <p>${descricao}</p>
                    <span class="price">R$ ${preco.toFixed(2)}</span>
                    <textarea placeholder="Observações"></textarea>
<button onclick="adicionarAoCarrinho('${nome}', '${imagem}', ${preco})">Adicionar ao Carrinho</button>
                    <button onclick="voltarParaLanches()">Voltar</button> <!-- Botão de voltar -->
                </div>
            </div>
        </section>
    `;
}

function adicionarAoCarrinho(nome) {
    alert(`${nome} foi adicionado ao carrinho!`);
}


 // Redireciona para a página lanches.html
function voltarParaLanches() {
    window.location.href = 'lanches.html';
}



