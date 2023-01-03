
const loading = document.querySelector('#loading');

document.getElementById('formulario').addEventListener('submit', function (evento) {

    //efeito de loading
    loading.style.display = 'block';
    setTimeout(() => {
        loading.style.display = 'none';
        // Obtém os dados do formulário
        var nome = document.getElementById('nome').value;
        var email = document.getElementById('email').value;
        var mensagem = document.getElementById('mensagem').value;
        var radio = document.querySelector('input[name=radio]:checked').value;
        var selecao = document.querySelector('select').value;


        // Adiciona os dados à tabela
        var tabela = document.getElementById('tabela');
        var linha = tabela.insertRow(-1);
        var celula1 = linha.insertCell(0);
        var celula2 = linha.insertCell(1);
        var celula3 = linha.insertCell(2);
        var celula4 = linha.insertCell(3);
        var celula5 = linha.insertCell(4);

        celula1.innerHTML = nome;
        celula2.innerHTML = email;
        celula3.innerHTML = mensagem;
        celula4.innerHTML = radio;
        celula5.innerHTML = selecao;


        // Limpa os campos do formulário e exibe uma mensagem de sucesso
        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('mensagem').value = '';
    }, 1000);

    //Previne o evento submit e refresh na página
    evento.preventDefault();
});





