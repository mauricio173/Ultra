const verificar = document.querySelector("#btn_verificar");
const limpar = document.querySelector("#btn_limpar");
const btn_ponto = document.querySelector("#btn_ponto");
const listasText = document.querySelector("#listasText");
let select = document.getElementById("opLabel");
const maisUm = document.querySelector("#maisUm");
const inputCheck = document.querySelectorAll(".boxe input[type=checkbox]");
const todasPropriedades = document.querySelector("#todasPropriedades");
const selId = document.querySelector("#selId");
const selClas = document.querySelector("#selClas");
const identificarElementos = document.querySelector("#identificarElementos");
const pesquisaEstilosElemento = document.querySelector("#pesquisaEstilosElemento");
const estilosElemento = document.querySelector("#estilosElemento");
const enviarBtnProp = document.querySelector("#enviarBtnProp");

// itera com método do Array para compatibilidade
Array.prototype.forEach.call(document.querySelectorAll(".boxe input[type=radio]"), function (radio) {
	radio.addEventListener(
		"click",
		function () {
			var self = this;
			// obter elementos com o mesmo nome exceto o próprio e grava estado desmarcado
			Array.prototype.filter
				.call(document.getElementsByName(this.name), function (filterEl) {
					return self !== filterEl;
				})
				.forEach(function (otherEl) {
					delete otherEl.dataset.check;
				});

			// grava estado baseado no estado anterior
			if (this.dataset.hasOwnProperty("check")) {
				this.checked = false;
				delete this.dataset.check;
			} else {
				this.dataset.check = "";
			}
		},
		false
	);
});

function percorre() {
	const inputRadio = document.querySelector(".boxe input[type=radio]");
	const inputCheck = document.querySelectorAll(".boxe input[type=checkbox]");
	inputCheck.forEach(c => (c.checked = false));
	inputRadio.checked = false;
	const viewListaAtualizada = document.querySelector("#viewListaAtualizada");

	// Data final
	const dataFinal = new Date();

	dataFinal.setMonth(dataFinal.getMonth() + 6);

	let atual = dataFinal.toISOString().split("T")[0];
	atual = atual.split("-");
	atual[2] = atual[2] < 10 ? atual[2] : atual[2];
	atual = atual.join("-");

	// Função para validar CPF
	function validarCPF(cpf) {
		cpf = cpf.replace(/[^\d]+/g, ""); // Remover pontos e traços
		if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false; // Verificar tamanho e sequência repetida
		let soma = 0,
			resto;
		for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
		resto = (soma * 10) % 11;
		if (resto === 10 || resto === 11) resto = 0;
		if (resto !== parseInt(cpf.substring(9, 10))) return false;

		soma = 0;
		for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
		resto = (soma * 10) % 11;
		if (resto === 10 || resto === 11) resto = 0;
		return resto === parseInt(cpf.substring(10, 11));
	}

	// Obter o conteúdo do elemento <label>
	 const label = document.getElementById("listasText").value;
	const regexCPF = /\b\d{11}\b/g;

	const cpfs = label.match(regexCPF) || [];

	const cpfCounts = cpfs.reduce((acc, cpf) => {
		acc[cpf] = (acc[cpf] || 0) + 1;
		return acc;
	}, {});
	const repeatedCPFs = Object.keys(cpfCounts).filter(cpf => cpfCounts[cpf] > 2);
	const registros = label.split(/(?<=\d{11})\s+/);


	const regArray = [];
	// Ajustar nome e data final, validar CPF
	registros.forEach(item => {
		const parte = item.split(";");
		// Validar CPF e remover caracteres desnecessários
		const cpfSemFormatacao = parte[0].replace(/[^\d]/g, "");
		const cpfValido = validarCPF(cpfSemFormatacao);
		if (cpfValido) {
			const nomeCompleto = parte[1]
				.trim()
				.toUpperCase()
				.normalize("NFD")
				.replace(/[\u0300-\u036f]/g, "")
				.split(" ");
			const nome = nomeCompleto[0];
			const sobreNome = nomeCompleto[nomeCompleto.length - 1];
			const nomeRegistro = nome + " " + sobreNome;
			
			parte[0] = parte[0].replace(/[^\d]/g, "");
			parte[5] = parte[5].replace(/[^\d]/g, "");
			parte[1] = nomeRegistro;
			parte[3] = atual;
			
			regArray.push(parte.join(";"));
		}
	});

	const registrosUnico = regArray.reduce((acc, registro) => {
		const cpf = registro.match(regexCPF)?.[0];
		if (cpf && !acc.has(cpf)) {
			acc.set(cpf, registro);
		}
		return acc;
	}, new Map());


	const registrosDoCpf = registros.filter(registro => registro);
	viewDom(viewListaAtualizada, registros, registrosUnico, atual);
}


function viewDom(viewListaAtualizada, registros, registrosUnico, atual) {
	const resDom = () => {
		return `
  	<h5 class="reset color_green">
  	${registros.length > 1 ? registros.length + " Registros Foram Analisados" : registros.length + " Registro Foi Analisado"}  
  	</h5>
  	<h3 class="reset">REGISTROS ATUALIZADOS:
  	</h3>
  	`;
	};
	viewListaAtualizada.innerHTML = resDom();

	const divs = document.createElement("div");

	const DomContente = () => {
		return `
  	
  	`;
	};

	const divsDom = () => {
		return `
  	<h3></h3>
  <ul class="ulListas  ulListasLenght scroll_bar">
      ${Array.from(registrosUnico.values())
							.map(registro => `<li>${registro}</li>`)
							.join("")}
  </ul>
  	`;
	};

	divs.classList.add("cpfRepetidoRegistros");

	divs.classList.add("todosRegistros");

	divs.innerHTML = divsDom();

	viewListaAtualizada.appendChild(divs);

	const ulLista = document.querySelectorAll(".ulListas");

	const ulListasLenght = document.querySelectorAll(".ulListasLenght li");

	const todosRegistrosH3 = document.querySelector(".todosRegistros h3");

	const p = document.createElement("p");

	p.style = "margin: 0";

	todosRegistrosH3.style = "margin: 0";
	const parDom = () => {
		return `
  ${ulListasLenght.length} Registros Atualizados (Sem Repetição de CPF + Vencimento ${atual.split("-").reverse().join("/")})`;
	};
	p.innerHTML = parDom();

	todosRegistrosH3.prepend(p);

	let textoCompleto = [];

	ulListasLenght.forEach((item, index) => {
		const reg = item.textContent;
		textoCompleto.push(reg);
	});

	divs.addEventListener("click", () => {
		const viewListaCopia = document.querySelector("#viewListaCopia");
		// Junta os itens do array com uma quebra de linha entre eles
		const textoComQuebras = textoCompleto.join("\n");

		navigator.clipboard
			.writeText(textoComQuebras)
			.then(() => {
				// Cria os elementos <li> dinamicamente
				const listaItens = textoCompleto.map(item => `<li>${item}</li>`).join("");

				// Insere os itens na <ul> dentro do container
				viewListaCopia.innerHTML = `
                          <p>ITENS COPIADOS</p>
                <div class="registrosCopiados">
                    <ul class="ulListas  scroll_bar">
                        ${listaItens}
                    </ul>
                </div>
            `;

				console.log("Texto copiado e exibido na lista!");
			})
			.catch(err => {
				console.error("Erro ao copiar texto: ", err);
			});
	});
}
// function viewDom(viewListaAtualizada, registros, registrosUnico, regArray, cpfCount, atual) {
// 	const resDom = () => {
// 		return `
//   	<h5 class="reset color_green">
//   	${registros.length > 1 ? registros.length + " Registros Foram Analisados" : registros.length + " Registro Foi Analisado"}  
//   	</h5>
//   	<h3 class="reset">REGISTROS ATUALIZADOS:
//   	</h3>
//   	`;
// 	};
// 	viewListaAtualizada.innerHTML = resDom();

// 	const divs = document.createElement("div");
	
// 	const divsRep = document.createElement("div");

// 	const DomContente = () => {
// 		return `
  	
//   	`;
// 	};

// 	const divsDom = () => {
// 		return `
//   	<h3></h3>
//   <ul class="ulListas  ulListasLenght scroll_bar">
//       ${Array.from(registrosUnico.values())
// 							.map(registro => `<li>${registro}</li>`)
// 							.join("")}
//   </ul>
//   	`;
// 	};
	
// 	// const divsRepDom = () => {
// 	// 	return `
// // 	<h3></h3>
// // <ul class="ulListas  ulListasLenght scroll_bar">
// //     ${Array.from(registrosUnico.values())
// 	// 						.map(registro => `<li>${registro}</li>`)
// 	// 						.join("")}
// // </ul>
// // ${regArray}
// // 	`;
// 	// };
// 	const divsRepDom = () => {
//   const cpfCount = new Map();

//   // Contar quantas vezes cada CPF aparece
//   regArray.forEach(({ cpf }) => {
//     cpfCount.set(cpf, (cpfCount.get(cpf) || 0) + 1);
//   });

//   // Filtrar registros com CPFs repetidos
//   const registrosRepetidos = regArray.filter(({ cpf }) => cpfCount.get(cpf) > 1);

//   return `
//     <h3>Registros com CPF repetido</h3>
//     <ul class="ulListas ulListasLenght scroll_bar">
//         ${registrosRepetidos
// 					.map(registro => `<li>${registro.cpf} - ${registro.nome}</li>`)
// 					.join("")}
//     </ul>
//   `;
// };


// 	divs.classList.add("cpfRepetidoRegistros");

// 	divs.classList.add("todosRegistros");

// 	divs.innerHTML = divsDom();
// 	divsRep.innerHTML = divsRepDom();

// 	viewListaAtualizada.appendChild(divs);
	
// 	viewListaAtualizada.appendChild(divsRep);

// 	const ulLista = document.querySelectorAll(".ulListas");

// 	const ulListasLenght = document.querySelectorAll(".ulListasLenght li");

// 	const todosRegistrosH3 = document.querySelector(".todosRegistros h3");

// 	const p = document.createElement("p");

// 	p.style = "margin: 0";

// 	todosRegistrosH3.style = "margin: 0";
// 	const parDom = () => {
// 		return `
//   ${ulListasLenght.length} Registros Atualizados (Sem Repetição de CPF + Vencimento ${atual.split("-").reverse().join("/")})`;
// 	};
// 	p.innerHTML = parDom();

// 	todosRegistrosH3.prepend(p);

// 	let textoCompleto = [];

// 	ulListasLenght.forEach((item, index) => {
// 		const reg = item.textContent;
// 		textoCompleto.push(reg);
// 	});

// 	divs.addEventListener("click", () => {
// 		const viewListaCopia = document.querySelector("#viewListaCopia");
// 		// Junta os itens do array com uma quebra de linha entre eles
// 		const textoComQuebras = textoCompleto.join("\n");

// 		navigator.clipboard
// 			.writeText(textoComQuebras)
// 			.then(() => {
// 				// Cria os elementos <li> dinamicamente
// 				const listaItens = textoCompleto.map(item => `<li>${item}</li>`).join("");

// 				// Insere os itens na <ul> dentro do container
// 				viewListaCopia.innerHTML = `
//                           <p>ITENS COPIADOS</p>
//                 <div class="registrosCopiados">
//                     <ul class="ulListas  scroll_bar">
//                         ${listaItens}
//                     </ul>
//                 </div>
//             `;

// 				console.log("Texto copiado e exibido na lista!");
// 			})
// 			.catch(err => {
// 				console.error("Erro ao copiar texto: ", err);
// 			});
// 	});
// }

function limparDom() {
	const viewListaAtualizada = document.querySelector("#viewListaAtualizada");
	const viewListaCopia = document.querySelector("#viewListaCopia");
	listasText.value = "";
	selectValue(select, "Selecione a opção");
	inputCheck.forEach(c => (c.checked = false));
	delete maisUm.dataset.check;
	maisUm.checked = false;
	viewListaCopia.innerHTML = ``;
	viewListaAtualizada.innerHTML = `
  	<h3 class="reset">REGISTROS ATUALIZADOS:</h3>
  	<div class="cpfRepetidoRegistros">
  	<h3 class="reset">SEM REGISTROS</h3>
  		
  	</div>
	`;
}
  document.addEventListener("DOMContentLoaded", () => {
  //	btnLabel.click();
  });
// Garante que "maisUm" possa ser marcado e desmarcado livremente
maisUm.addEventListener("click", function (event) {
	const selecionado = document.querySelector(".selecionado");
	const target = event.target;
	if (!maisUm.checked || maisUm.checked) {
		selecionado.innerHTML = ``;
		inputCheck.forEach(c => (c.checked = false));
	}
	// O navegador já gerencia o estado, então não precisamos alterar manualmente `maisUm.checked`
	// console.log(`maisUm agora está ${maisUm.checked ? 'marcado' : 'desmarcado'}`);
});

// Inicia o comportamento ao carregar a página
initCheckboxRadioToggle();

// Adiciona evento de clique a todos os checkboxes para ativar/desativar corretamente
inputCheck.forEach(item => {
	item.setAttribute("onclick", "marcaDesmarca(this)");
});

btnLabel.addEventListener("click", () => {
	let regs = "";
	inputCheck.forEach((item, index) => {
		maisUm.checked = true;
		item.checked = true;
		if (item.checked && maisUm.checked) {
			if (item.id == "um") {
				regs = `
03379443000;WAGNER LUIZ NUNES PADILHA;2024-09-20;2025-03-20;1;03379443000
02669395031;ANDRESSA GRASIELI BRAGA DOS SANTOS;2024-09-20;2025-03-20;1;02669395031
07904395495;REBECA BLEHM;2024-09-20;2025-03-20;1;07904395495
86463110078;MICAELLA DE BOER;2024-09-20;2025-03-20;1;86463110078
86320455020;VITORIA LUCHINI LAMM;2024-09-20;2025-03-20;1;86320455020
02832630081;GABRIEL HENZE BREGONZI;2024-09-20;2025-03-20;1;02832630081
02119074054;VANESSA DURANTI DA SILVA;2024-09-20;2025-03-20;1;02119074054
01603372083;CHRISTOPHER MACEDO LUIZ;2024-09-20;2025-03-20;1;01603372083
97360309034;DANIEL MOREIRA COELHO;2024-09-20;2025-03-20;1;97360309034
86842277000;ANDRIELLE FISCHER;2024-09-20;2025-03-20;1;86842277000
01010327062;ISABELLA NOSCHANG MITTELSTAEDT;2024-09-20;2025-03-20;1;01010327062
00954927044;NATHALIA NOSCHANG MITTELSTAEDT;2024-09-20;2025-03-20;1;00954927044
48335312087;ANA BEATRIZ NOSCHANG MITTELSTAEDT;2024-09-20;2025-03-20;1;48335312087
01336368012;MARCELA DIAS;2024-09-20;2025-03-20;1;01336368012
29044797832;ANDRE RYSEVAS BABBO;2024-09-20;2025-03-20;1;29044797832
29044797832;ANDRE RYSEVAS BABBO;2024-09-20;2025-03-20;1;29044797832
26435681848;ITALO DIMARZIO;2024-09-20;2025-03-20;1;26435681848
29044797832;ANDRE RYSEVAS BABBO;2024-09-20;2025-03-20;1;29044797832
26435681848;ITALO DIMARZIO;2024-09-20;2025-03-20;1;26435681848
05107842089;ANDRIELLY DE AVILA SILVEIRA;2024-09-20;2025-03-20;1;05107842089
86059092004;HAMID PUREZA;2024-09-20;2025-03-20;1;86059092004
86088777087;ANA VICTORIA DAVILA CAMARGO;2024-09-20;2025-03-20;1;86088777087
03545001040;LEONARDO SANTOS DA SILVA;2024-09-20;2025-03-20;1;03545001040`;
				listasText.value += regs;
			}
			if (item.id == "dois") {
				regs = `
29044797832;ANDRE RYSEVAS BABBO;2024-09-20;2025-03-20;1;29044797832
03379443000;WAGNER LUIZ NUNES PADILHA;2024-09-20;2025-03-20;1;03379443000
03379443000;WAGNER LUIZ NUNES PADILHA;2024-09-20;2025-03-20;1;03379443000`;
				listasText.value += regs;
			}
			if (item.id == "tres") {
				regs = `
29044797832;ANDRE RYSEVAS BABBO;2024-09-20;2025-03-20;1;29044797832
03379443000;WAGNER LUIZ NUNES PADILHA;2024-09-20;2025-03-20;1;03379443000`;
				listasText.value += regs;
			}
			if (item.id == "quatro") {
				regs = `
03379443000;WAGNER LUIZ NUNES PADILHA;2024-09-20;2025-03-20;1;03379443000
29044797832;ANDRE RYSEVAS BABBO;2024-09-20;2025-03-20;1;29044797832
26435681848;ITALO DIMARZIO;2024-09-20;2025-03-20;1;26435681848`;
				listasText.value += regs;
			}
		} else if (item.checked && !maisUm.checked) {
			if (item.id == "um") {
				regs = `
03379443000;WAGNER LUIZ NUNES PADILHA;2024-09-20;2025-03-20;1;03379443000
02669395031;ANDRESSA GRASIELI BRAGA DOS SANTOS;2024-09-20;2025-03-20;1;02669395031
07904395495;REBECA BLEHM;2024-09-20;2025-03-20;1;07904395495
86463110078;MICAELLA DE BOER;2024-09-20;2025-03-20;1;86463110078
86320455020;VITORIA LUCHINI LAMM;2024-09-20;2025-03-20;1;86320455020
02832630081;GABRIEL HENZE BREGONZI;2024-09-20;2025-03-20;1;02832630081
02119074054;VANESSA DURANTI DA SILVA;2024-09-20;2025-03-20;1;02119074054
01603372083;CHRISTOPHER MACEDO LUIZ;2024-09-20;2025-03-20;1;01603372083
97360309034;DANIEL MOREIRA COELHO;2024-09-20;2025-03-20;1;97360309034
86842277000;ANDRIELLE FISCHER;2024-09-20;2025-03-20;1;86842277000
01010327062;ISABELLA NOSCHANG MITTELSTAEDT;2024-09-20;2025-03-20;1;01010327062
00954927044;NATHALIA NOSCHANG MITTELSTAEDT;2024-09-20;2025-03-20;1;00954927044
48335312087;ANA BEATRIZ NOSCHANG MITTELSTAEDT;2024-09-20;2025-03-20;1;48335312087
01336368012;MARCELA DIAS;2024-09-20;2025-03-20;1;01336368012
29044797832;ANDRE RYSEVAS BABBO;2024-09-20;2025-03-20;1;29044797832
29044797832;ANDRE RYSEVAS BABBO;2024-09-20;2025-03-20;1;29044797832
26435681848;ITALO DIMARZIO;2024-09-20;2025-03-20;1;26435681848
29044797832;ANDRE RYSEVAS BABBO;2024-09-20;2025-03-20;1;29044797832
26435681848;ITALO DIMARZIO;2024-09-20;2025-03-20;1;26435681848
05107842089;ANDRIELLY DE AVILA SILVEIRA;2024-09-20;2025-03-20;1;05107842089
86059092004;HAMID PUREZA;2024-09-20;2025-03-20;1;86059092004
86088777087;ANA VICTORIA DAVILA CAMARGO;2024-09-20;2025-03-20;1;86088777087
03545001040;LEONARDO SANTOS DA SILVA;2024-09-20;2025-03-20;1;03545001040`;
				listasText.value = regs;
			}
			if (item.id == "dois") {
				regs = `
29044797832;ANDRE RYSEVAS BABBO;2024-09-20;2025-03-20;1;29044797832
03379443000;WAGNER LUIZ NUNES PADILHA;2024-09-20;2025-03-20;1;03379443000
03379443000;WAGNER LUIZ NUNES PADILHA;2024-09-20;2025-03-20;1;03379443000`;
				listasText.value = regs;
			}
			if (item.id == "tres") {
				regs = `
29044797832;ANDRE RYSEVAS BABBO;2024-09-20;2025-03-20;1;29044797832
03379443000;WAGNER LUIZ NUNES PADILHA;2024-09-20;2025-03-20;1;03379443000`;
				listasText.value = regs;
			}
			if (item.id == "quatro") {
				regs = `
03379443000;WAGNER LUIZ NUNES PADILHA;2024-09-20;2025-03-20;1;03379443000
29044797832;ANDRE RYSEVAS BABBO;2024-09-20;2025-03-20;1;29044797832
26435681848;ITALO DIMARZIO;2024-09-20;2025-03-20;1;26435681848`;
				listasText.value = regs;
			}
		}
	});
btnLabel.click();
	setTimeout(function () {
		const inputRadio = document.querySelector(".boxe input[type=radio]");
		const inputCheck = document.querySelectorAll(".boxe input[type=checkbox]");
		// inputCheck.forEach(c => c.checked = false);
		inputCheck.forEach(c => {
			delete c.dataset.check;
			c.checked = false;
		});
		delete inputRadio.dataset.check;
		inputRadio.checked = false;
	}, 800);
});

const resets = "Selecione a opção";

function selectValue(select, resets) {
	select.value = `${resets}`;
}

let lastSelectedValue = null; // Armazena o último valor selecionado
select.addEventListener("change", function (event) {
	const selectedOption = event.target.options[event.target.selectedIndex]; // Obtém a opção selecionada
	const currentValue = selectedOption.value; // Valor da opção atual

	// Verifica se o valor selecionado foi alterado ou se permanece o mesmo
	if (currentValue === lastSelectedValue) {
		console.log("A opção selecionada não foi alterada.");
	} else {
		console.log("A opção selecionada foi alterada.");
	}

	// Atualiza o valor selecionado para o próximo evento de comparação
	lastSelectedValue = currentValue;
});

function optionSelect() {
	identificarElementos.innerHTML = ""; // Limpa as opções antes de preencher
	if (selId.checked) {
		document.querySelectorAll("[id]").forEach(el => {
			let option = document.createElement("option");
			option.value = el.id;
			option.textContent = el.id;
			identificarElementos.appendChild(option);
		});
	}
	if (selClas.checked) {
		let classesUnicas = new Set();

		document.querySelectorAll("[class]").forEach(el => {
			el.classList.forEach(classe => classesUnicas.add(classe));
		});

		classesUnicas.forEach(classe => {
			let option = document.createElement("option");
			option.value = classe;
			option.textContent = classe;
			identificarElementos.appendChild(option);
		});
	}
}

function estiloEl() {
	estilosElemento.innerHTML = ""; // Limpa os estilos anteriores
	pesquisaEstilosElemento.value = ""; // Limpa o campo de pesquisa
	todasPropriedades = []; // Reseta a lista de propriedades

	const elementosSelecionado = document.getElementById(identificarElementos.value);

	if (elementosSelecionado) {
		const computedStyle = window.getComputedStyle(elementosSelecionado);
		const inlineStyle = elementosSelecionado.style;

		let estiloDefinidos = new Set();

		// Itera sobre todas as propriedades computadas e verifica se foram definidas no CSS ou inline
		for (let prop of computedStyle) {
			if (inlineStyle.getPropertyValue(prop) || document.styleSheets) {
				estiloDefinidos.add(prop);
			}
		}

		// Armazena todas as propriedades para a pesquisa
		todasPropriedades = Array.from(estiloDefinidos);

		// Preencher o select de estilos
		atualizarEstilos(todasPropriedades);
	}
}

function atualizarEstilos(lista) {
	estilosElemento.innerHTML = "";
	lista.forEach(prop => {
		let option = document.createElement("option");
		option.value = prop;
		option.textContent = prop;
		estilosElemento.appendChild(option);
	});
}

function marcarDesmarcar(caller) {
	var checks = document.querySelectorAll('input[name="checkboxes"]');
	checks.forEach((c, i) => {
		if (c == caller && !c.checked) {
			c.checked = false;
		} else {
			c.checked = c == caller;
			optionSelect();
		}
	});
}

function initCheckboxRadioToggle() {
	const elements = document.querySelectorAll(".boxe input[type=checkbox]");
	elements.forEach(input => {
		input.addEventListener("click", handleCheckboxRadioClick, false);
	});
}

// Manipula o clique nos checkboxes e botões de rádio
function handleCheckboxRadioClick() {
	let self = this;

	if (!maisUm.checked) {
		// Se "maisUm" está desativado, permite apenas um checkbox marcado por vez
		clearOtherSelections(self);
	}

	// Alterna o estado do elemento atual (marcando ou desmarcando)
	toggleSelection(self);
}

// Remove a propriedade `data-check` e desmarca os outros elementos do mesmo grupo
function clearOtherSelections(element) {
	const sameNameElements = Array.from(document.getElementsByName(element.name)).filter(el => el !== element);

	sameNameElements.forEach(el => {
		el.checked = false; // Desmarca os outros checkboxes
		delete el.dataset.check; // Remove o estado armazenado
	});
}

// Alterna o estado do checkbox ou rádio selecionado
function toggleSelection(element) {
	if (element.checked) {
		element.dataset.check = ""; // Marca o checkbox
	} else {
		delete element.dataset.check; // Remove a marcação
	}
}

function marcaDesmarca(caller) {
	const checks = document.querySelectorAll('.boxe input[type="checkbox"]');

	if (maisUm.checked) {
		// Se "maisUm" está ativado, alterna o estado do checkbox individualmente
		toggleSelection(caller);
	} else {
		// Se "maisUm" está desativado, permite apenas um checkbox marcado
		checks.forEach((c, index) => {
			if (c !== caller) {
				c.checked = false;
				delete c.dataset.check;
			}
		});

		// Alterna o estado do checkbox clicado
		toggleSelection(caller);
	}
}

const checksInp = document.querySelectorAll('input[name="checkboxes"]');

checksInp.forEach((item, index) => {
	item.setAttribute("onclick", "marcarDesmarcar(this)");
});

setTimeout(function() {
selId.click();
	
}, 2000);

identificarElementos.addEventListener("change", function () {
	estilosElemento.innerHTML = ""; // Limpa os estiloss anteriores
	pesquisaEstilosElemento.value = ""; // Limpa o campo de pesquisa
	todasPropriedade = []; // Reseta a lista de propriedades
	let elementoSelecionado;
	if (selClas.checked) {
		elementoSelecionado = document.querySelector(`.${identificarElementos.value}`);
	} else if (selId.checked) {
		elementoSelecionado = document.querySelector(`#${identificarElementos.value}`);
	}

	if (elementoSelecionado) {
		const computedStyles = window.getComputedStyle(elementoSelecionado);
		const inlineStyles = elementoSelecionado.style;

		let estiloDefinido = new Set();

		// Itera sobre todas as propriedades computadas e verifica se foram definidas no CSS ou inline
		for (let prop of computedStyles) {
			if (inlineStyles.getPropertyValue(prop) || document.styleSheets) {
				estiloDefinido.add(prop);
			}
		}

		// Armazena todas as propriedades para a pesquisa
		todasPropriedade = Array.from(estiloDefinido);

		// Preencher o select de estiloss
		atualizarEstilos(todasPropriedade);
	}
});

enviarBtnProp.addEventListener("click", function () {
	let elementoSelecionado = selId.checked ? document.querySelector(`#${identificarElementos.value}`) : selClas.checked ? document.querySelector(`.${identificarElementos.value}`) : null;

	if (!elementoSelecionado) return;

	console.clear(); // Limpa o console antes de exibir novos resultados

	const computedStyles = window.getComputedStyle(elementoSelecionado);
	const inlineStyle = elementoSelecionado.style;

	let estiloDefinidos = new Set();

	pesquisaEstilosElemento.value = ""; // Limpa o campo de pesquisa
	Propriedades = []; // Reseta a lista de propriedades

	for (let prop of computedStyles) {
		if (inlineStyle.getPropertyValue(prop) || document.styleSheets) {
			estiloDefinidos.add(prop);
		}
	}

	// Armazena todas as propriedades para a pesquisa
	Propriedades = Array.from(estiloDefinidos);

	if (todasPropriedades.checked) {
		console.log(`Todos os estilos do elemento ${selId.checked ? "#" : "."}${identificarElementos.value}:`);
		Propriedades.forEach(prop => console.log(`${prop}: ${computedStyles.getPropertyValue(prop)}`));
	} else {
		const propSelecionada = estilosElemento.value;
		if (propSelecionada) {
			console.log(`Estilo "${propSelecionada}" do elemento ${selId.checked ? "#" : "."}${identificarElementos.value}:`);
			console.log(`${propSelecionada}: ${computedStyles.getPropertyValue(propSelecionada)}`);
			identificarElementos.value = identificarElementos.querySelector("option").value;
		} else {
			console.log("Nenhuma propriedade selecionada.");
		}
	}
});

document.getElementById("pesquisaEstilosElemento").addEventListener("input", function () {
	let pesquisa = this.value.trim().toLowerCase();
	let select = document.getElementById("estilosElemento");
	let options = Array.from(select.options);

	// Verifica se a pesquisa corresponde a alguma opção
	let optionEncontrada = options.find(option => option.value.toLowerCase().includes(pesquisa));

	if (optionEncontrada) {
		select.value = optionEncontrada.value; // Define o valor do select para a opção encontrada
	}
});

verificar.addEventListener("click", () => {
	percorre();
});
limpar.addEventListener("click", () => {
	limparDom();
});
