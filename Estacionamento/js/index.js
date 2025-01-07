const btnSec = document.querySelector("#btnSec");
document.addEventListener("DOMContentLoaded", () => {
 btnSec.click();
});

const boxSenha = document.querySelector("#offcanvasExample");

const btnOkSenha = document.querySelector("#btnOkSenha");
const btnClose = document.querySelector(".btn-close");

btnOkSenha.addEventListener("click", () => {
  
  const inputSec = document.querySelector("#inputSec").value;
  const dropPassword = document.querySelector(".dropPassword");
 
 const dropPasswordH6 = document.querySelector(".dropPasswordH6");

 if (inputSec == "ultra10") {
   dropPasswordH6.innerHTML = "Senha correta!";
   dropPasswordH6.style.color="var(--verde)";
   setTimeout(function() {
    btnClose.click();
   dropPasswordH6.innerHTML = "";
     
   }, 800);
 } else {
  // dropPassword.appendChild(h6);
   dropPasswordH6.innerHTML = "Senha incorreta!";
   
   setTimeout(function() {
   dropPasswordH6.innerHTML = "";
     return;
   }, 1500);
   
   
 }
});

const nome = document.querySelector("#nome");
const cpf = document.querySelector("#cpf");
const dataInicio = document.querySelector("#dataInicio");
const dataFinal = document.querySelector("#dataFinal");
const cadastrar = document.querySelector("#cadastrar");
const btnEnviar = document.querySelector("#btnEnviar");
const btnClear = document.querySelector("#btnClear");
const invalido = document.querySelector("#invalido");
const lista = document.querySelector(".lista");
const hoje = new Date();
const dataAtual = hoje.getFullYear() + "-" + ((hoje.getMonth() + 1) < 10 ? ("0" + (hoje.getMonth() + 1)) : (hoje.getMonth() + 1)) + "-" + (hoje.getDate() < 10 ? ("0" + hoje.getDate()) : hoje.getDate());

// Criar uma nova data baseada na atual
const dataFutura = new Date(hoje);
dataFutura.setMonth(dataFutura.getMonth() + 6);

// Formatar as datas no formato "YYYY-MM-DD"
const formatarData = data => {
 const ano = data.getFullYear();
 const mes = String(data.getMonth() + 1).padStart(2, "0"); // Adiciona 1 ao mÃªs porque o Ã­ndice começa em 0
 const dia = String(data.getDate()).padStart(2, "0");
 return `${ano}-${mes}-${dia}`;
};

dataInicio.value = dataAtual;
dataFinal.value = formatarData(dataFutura);

btnEnviar.addEventListener("click", event => {
 event.preventDefault();
 validarCPF();
// verificar();
});

btnClear.addEventListener("click", event => {
 event.preventDefault();
 const cadastros = document.querySelector("#cadastros");
 const lista = document.querySelector(".lista");
 cadastros.innerHTML = `
 
 `;
 lista.innerHTML = `
 
 `;
// verificar();
});

function validarCPF() {
 const cpfInput = document.getElementById("cpf").value;

 // Remover formataÃ§Ã£o (pontos e traÃ§os)
 const cpf = cpfInput.replace(/\D/g, "");

 // Verificar se tem 11 digitos
 if (cpf.length !== 11) {
  mostrarResultado("CPF inVálido: deve conter 11 digitos.", false);
  invalido.style = "display: block; color: #28abab";

  invalido.innerHTML = `
   CPF inVálido: deve conter 11 digitos.
   `;

  setTimeout(function () {
   invalido.style = "display: none";
   cpf.value = "";
  }, 1500);
  return false;
 }

 // Verificar se todos os digitados são iguais (ex.: "111.111.111-11")
 if (/^(\d)\1{10}$/.test(cpf)) {
  mostrarResultado("CPF inVálido: todos os digitados são iguais.", false);
  invalido.style = "display: block; color: #28abab";

  invalido.innerHTML = `
   CPF inválido: todos os digitados são iguais.
   `;

  setTimeout(function () {
   invalido.style = "display: none";
   cpf.value = "";
  }, 1500);
  return false;
 }

 // Calcular os digitos verificadores
 if (!validarDigitosVerificadores(cpf)) {
  mostrarResultado("CPF inVálido: digitos verificadores incorretos.", false);
  invalido.style = "display: block; color: #28abab";

  invalido.innerHTML = `
   CPF inVálido: digitos verificadores incorretos.
   `;

  setTimeout(function () {
   invalido.style = "display: none";
   cpf.value = "";
  }, 1500);
  return false;
 }

 mostrarResultado("CPF Válido!", true);
 return false; // Evita recarregar a página
}

function validarDigitosVerificadores(cpf) {
 // Função para calcular o digito verificador
 const calcularDigito = base => {
  let soma = 0;
  for (let i = 0; i < base.length; i++) {
   soma += parseInt(base[i]) * (base.length + 1 - i);
  }
  const resto = (soma * 10) % 11;
  return resto === 10 ? 0 : resto;
 };

 // Validar primeiro digito
 const primeiroDigito = calcularDigito(cpf.slice(0, 9));
 if (primeiroDigito !== parseInt(cpf[9])) return false;

 // Validar segundo digito
 const segundoDigito = calcularDigito(cpf.slice(0, 10));
 if (segundoDigito !== parseInt(cpf[10])) return false;

 return true;
}

const texArea = document.querySelector("#texArea");

function verificar() {
  const cadastro = document.querySelector("#cadastros");
  const cadastrado = cadastro.querySelectorAll("p");
  //const cadastrado = document.querySelectorAll("#cadastros p");
  
  const cpfValues = cpf.value.replace(/\D/g, "");
 const nomeValues = nome.value
  .toUpperCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .trim();
 const dataInicioValues = dataInicio.value;
 const dataFinalValues = dataFinal.value;

 let registros = {
  cpf: cpfValues,
  nome: nomeValues
   .normalize("NFD")
   .replace(/[\u0300-\u036f]/g, "")
   .trim(),
  inicio: dataInicioValues,
  fim: dataFinalValues
 };

 let cad = `${registros.cpf};${registros.nome};${registros.inicio};${registros.fim};1;${registros.cpf}`;
 
 console.log(cadastrado);
}

function mostrarResultado(mensagem, valido) {
 const cadastros = document.querySelector("#cadastros");
 const invalido = document.querySelector("#invalido");

 // Normaliza os valores de entrada
 const cpfValue = cpf.value.replace(/\D/g, ""); // Remove caracteres Não numéricos
 const nomeValue = nome.value
  .toUpperCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .trim(); // Remove acentos e espaços

// const dataInicioValue = dataInicio.value;

 const dataInicioValue = dataAtual;
 console.log(dataAtual);
 const dataFinalValue = dataFinal.value;

 if (nomeValue === "" || nomeValue.startsWith(" ")) {
  // Verifica se o nome está vazio ou começa com espaço
  invalido.style = "display: block; color: #28abab";
  invalido.innerHTML = "Nome inválido!";
  nome.value = ""; // Limpa o campo nome
  setTimeout(() => (invalido.style = "display: none"), 1500);
  return;
 }
const nomeSobrenome = nomeValue.split(" ");

 const texto = `${cpfValue};${nomeSobrenome[0]+ " " + nomeSobrenome.pop()};${dataInicioValue};${dataFinalValue};1;${cpfValue}`;
 const itens = cadastros.querySelectorAll("p");

 // Verifica se o CPF ou nome já  estão na lista
 let itemDuplicado = null; // Armazena o item duplicado, se encontrado
 let ambosDuplicados = false; // Flag para CPF e Nome duplicados

 itens.forEach(item => {
  const itemTexto = item.textContent
   .toUpperCase()
   .normalize("NFD")
   .replace(/[\u0300-\u036f]/g, ""); // Normaliza texto existente na lista

  // Extrai o nome e CPF de cada item da lista
  const [cpfItem, nomeItem] = itemTexto.split(";");
  // Verifica duplicidade por CPF e Nome
  // if (cpfItem === cpfValue && nomeItem === nomeValue) {
  // itemDuplicado = item;
  // ambosDuplicados = true; // Ambos CPF e Nome estão duplicados
  // } else if (cpfItem === cpfValue || nomeItem === nomeValue) {
  // itemDuplicado = item;
  // }
  if (cpfItem === cpfValue ) {
   itemDuplicado = item;
  }
 });

 if (itemDuplicado) {
  // Indica duplicidade
  console.log(`Item duplicado encontrado: ${itemDuplicado.textContent}`);
  itemDuplicado.style.color = "var(--laranja)"; // Muda a cor temporariamente

  // Exibe a mensagem correta
  if (ambosDuplicados) {
   invalido.style = "display: block; color: #28abab";
   invalido.innerHTML = "CPF e Nome já  inseridos!";
  } else if (cpfValue === itemDuplicado.textContent.split(";")[0]) {
   invalido.style = "display: block; color: #28abab";
   invalido.innerHTML = "CPF já  inserido!";
  } else {
   invalido.style = "display: block; color: #28abab";
   invalido.innerHTML = "Nome já  inserido!";
  }

  setTimeout(() => {
   itemDuplicado.style.color = "var(--verde)"; // Retorna Ã  cor padrão
   invalido.style = "display: none";
  }, 1500);

  // Interrompe a execução se já  existe duplicidade
  cpf.value = ""; // Limpa o campo CPF
  nome.value = ""; // Limpa o campo nome
  return;
 }

 // Adiciona um novo registro se Válido
 if (valido && nome.value.trim() !== "") {
  const el = document.createElement("p");
  el.innerHTML = texto
   .normalize("NFD")
   .replace(/[\u0300-\u036f]/g, "")
   .trim();
  el.style.color = "var(--verde)"; // Adiciona cor padrão
  cadastros.appendChild(el);
  
  

  // Mensagem de sucesso
  invalido.style = "display: block; color: #28abab";
  invalido.innerHTML = "CPF e nome cadastrados com sucesso!";
  setTimeout(() => (invalido.style = "display: none"), 1500);

  // Limpa os campos apÃ³s cadastro
   nome.value = "";
   cpf.value = "";
  
  
 } else if (!valido) {
  // Exibe mensagem de CPF inválido
  invalido.style = "display: block; color: red";
  invalido.innerHTML = "CPF inválido!";
  setTimeout(() => (invalido.style = "display: none"), 1500);
 }
}

// Adiciona evento de clique no container cadastros
document.querySelector("#cadastros").addEventListener("click", event => {
 // Verifica se o elemento clicado Ã© um <p>
 if (event.target.tagName === "P") {
  // Copia o texto de todos os <p> do container
  const todosElementos = Array.from(document.querySelectorAll("#cadastros p"));
  const textoCompleto = todosElementos.map(el => el.innerText).join("\n");
lista.innerHTML = `

`;
  todosElementos.forEach((item, index) => {
    let p = document.createElement("p");
    p.textContent = item.innerText;
   console.log(item.innerText);
  });

  navigator.clipboard
   .writeText(textoCompleto)
   .then(() => {
    invalido.style = "visibility: visible; font-size: 10px; color: #28abab";
    invalido.innerHTML = "Itens copiados com sucesso!";
   
    setTimeout(function () {
     invalido.style = "visibility: hidden";
    }, 1500);
   
   })
   .catch(err => {
    console.error("Erro ao copiar texto: ", err);
   });
 }
});