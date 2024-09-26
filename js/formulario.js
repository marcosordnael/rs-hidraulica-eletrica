// Função para enviar o formulário via AJAX
document.getElementById('orcamento-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio tradicional do formulário

    const formData = new FormData(this); // Captura os dados do formulário

    // Exibe o indicador de loading
    document.getElementById('loading').style.display = 'block';
    document.getElementById('form-feedback').innerHTML = ''; // Limpa mensagens anteriores
    document.getElementById('form-feedback').style.display = 'none'; // Esconde feedback anterior

    // Envia a requisição via AJAX para o FormSubmit
    fetch('https://formsubmit.co/ajax/409aa23e3960ef6756736d06a04a37ec', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => response.json())
    .then(data => {
        // Oculta o indicador de loading
        document.getElementById('loading').style.display = 'none';
        
        if (data.success) {
            // Exibe mensagem de sucesso no feedback
            document.getElementById('form-feedback').innerHTML = "<p>Obrigado! Seu orçamento foi enviado com sucesso.</p>";
            document.getElementById('form-feedback').style.display = 'block'; // Mostra o feedback
            document.getElementById('form-feedback').style.backgroundColor = '#e0ffe0'; // Fundo verde
            document.getElementById('form-feedback').style.color = '#007500'; // Texto verde
            document.getElementById('orcamento-form').reset(); // Limpa o formulário
        } else {
            // Se houver um erro (ex.: verificação CAPTCHA necessária)
            document.getElementById('form-feedback').innerHTML = "<p>Por favor, complete a verificação CAPTCHA.</p>";
            document.getElementById('form-feedback').style.display = 'block'; // Mostra o feedback
            document.getElementById('form-feedback').style.backgroundColor = '#ffe0e0'; // Fundo vermelho claro
            document.getElementById('form-feedback').style.color = '#750000'; // Texto vermelho
        }
    }).catch(error => {
        // Oculta o indicador de loading em caso de erro
        document.getElementById('loading').style.display = 'none';
        // Exibe mensagem de erro
        document.getElementById('form-feedback').innerHTML = "<p>Ocorreu um erro. Tente novamente mais tarde.</p>";
        document.getElementById('form-feedback').style.display = 'block'; // Mostra o feedback
        document.getElementById('form-feedback').style.backgroundColor = '#ffe0e0'; // Fundo vermelho claro
        document.getElementById('form-feedback').style.color = '#750000'; // Texto vermelho
    });
});
