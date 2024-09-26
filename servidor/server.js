const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para permitir JSON no body das requisições
app.use(express.json());

// Exemplo de rota para processar o envio do formulário
app.post('/orcamento', (req, res) => {
    const { nome, email, telefone, mensagem } = req.body;
    // Aqui você pode enviar esses dados para o Firebase ou qualquer outra ação
    res.send('Orçamento recebido com sucesso!');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
