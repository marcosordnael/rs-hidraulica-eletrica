// script.js
import { db, set, push, ref } from "./configFirebase.js";

function formulario(event) {
  event.preventDefault();
  
  // Capturar valores do formulário
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const mensagem = document.getElementById("mensagem").value;

  // Referência para a base de dados
  const contatosRef = ref(db, 'contatos');
  
  // Adicionar contato usando uma chave gerada automaticamente
  const novoContatoRef = push(contatosRef);
  const novoContatoKey = novoContatoRef.key;
  const chaveContato = `${nome}_${novoContatoKey}`;

  // Salvar os dados no Firebase com a chave gerada
  set(ref(db, `contatos/${chaveContato}`), {
    nome,
    email,
    telefone,
    mensagem
  })
  .then(() => {
    // Limpar o formulário e exibir mensagem de sucesso
    event.target.reset();
    exibirMensagemDeSucesso();
  })
  .catch((error) => {
    console.error("Erro ao salvar no Firebase: ", error);
  });
}

// Exibir mensagem de sucesso
function exibirMensagemDeSucesso() {
  const mensagemSucesso = document.getElementById('mensagem-sucesso');
  mensagemSucesso.style.display = 'block';
}

window.formulario = formulario;
