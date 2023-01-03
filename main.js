
document.getElementById('formulario').addEventListener('submit', function (evento) {
    // Obtém os dados do formulário
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    // Adiciona os dados à tabela
    var tabela = document.getElementById('tabela');
    var linha = tabela.insertRow(-1);
    var celula1 = linha.insertCell(0);
    var celula2 = linha.insertCell(1);
    var celula3 = linha.insertCell(2);
    celula1.innerHTML = nome;
    celula2.innerHTML = email;
    celula3.innerHTML = mensagem;

    // Limpa os campos do formulário e exibe uma mensagem de sucesso
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensagem').value = '';

    //Previne o evento submit e refresh na página
    evento.preventDefault();
});





