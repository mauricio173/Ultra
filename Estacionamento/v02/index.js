
// function percorre() {
//   const viewListas = document.querySelector("#viewLista");
    
//   const viewListaAtualizada = document.querySelector("#viewListaAtualizada");
    
  
  
//   // Data final
//   const dataFinal = new Date(); 
    
//   dataFinal.setMonth(dataFinal.getMonth() + 6); 
    
//   let atual = dataFinal.toISOString().split("T")[0];
    
//   atual = atual.split("-");
    
//   atual[2] = atual[2] < 10 ? "0" + atual[2] : atual[2];
    
//   atual = atual.join("-");

//   // Função para validar CPF
//   function validarCPF(cpf) {
//       cpf = cpf.replace(/[^\d]+/g, ""); // Remover pontos e traços
//       if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false; // Verificar tamanho e sequência repetida
//       let soma = 0, resto;
//       for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
//       resto = (soma * 10) % 11;
//       if (resto === 10 || resto === 11) resto = 0;
//       if (resto !== parseInt(cpf.substring(9, 10))) return false;

//       soma = 0;
//       for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
//       resto = (soma * 10) % 11;
//       if (resto === 10 || resto === 11) resto = 0;
//       return resto === parseInt(cpf.substring(10, 11));
//   }

//     // Obter o conteúdo do elemento <label>
//   const label = document.getElementById("listasText").value;
  
//   const regexCPF = /\b\d{11}\b/g;
  
//   const cpfs = label.match(regexCPF) || [];

//   const cpfCounts = cpfs.reduce((acc, cpf) => {
//       acc[cpf] = (acc[cpf] || 0) + 1;
//       return acc;
//   }, {});

//   const repeatedCPFs = Object.keys(cpfCounts).filter(cpf => cpfCounts[cpf] > 2);
  
//   const registros = label.split(/(?<=\d{11})\s+/);
    
//   const regArray = [];
//     // Ajustar nome e data final, validar CPF
//   registros.forEach((item) => {
//       const parte = item.split(";");
//       // Validar CPF e remover caracteres desnecessários
//       const cpfSemFormatacao = parte[0].replace(/[^\d]/g, "");
//       const cpfValido = validarCPF(cpfSemFormatacao);

//       if (cpfValido) {
//           const nomeCompleto = parte[1].trim().toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(" ");
//           const nome = nomeCompleto[0];
//           const sobreNome = nomeCompleto[nomeCompleto.length - 1];
//           const nomeRegistro = nome + " " + sobreNome;
//           parte[1] = nomeRegistro;
//           parte[3] = atual;
//           regArray.push(parte.join(";"));
//       }
//   });
	
//   const registrosUnico = regArray.reduce((acc, registro) => {
//       const cpf = registro.match(regexCPF)?.[0];
//       if (cpf && !acc.has(cpf)) {
//           acc.set(cpf, registro);
//       }
//       return acc;
//   }, new Map());

//   repeatedCPFs.forEach(cpf => {
//       const registrosDoCpf = registros.filter(registro => registro.includes(cpf));
//       const div = document.createElement("div");
//       div.classList.add("cpfRepetidoRegistros");
//       div.innerHTML = `
//       <p>
//       O CPF ${cpf} foi encontrado em \n ${registrosDoCpf.length} ${registrosDoCpf.length > 1 ? "registros" : "registro"}.
//       </p>
//       <ul class="ulListas scroll_bar">
//           ${registrosDoCpf.map(registro => `<li>${registro}</li>`).join("")}
//       </ul>
//       `;
//       viewListas.appendChild(div);
//   });

//   viewListas.innerHTML = ``;
//   const registrosDoCpf = registros.filter(registro => registro);
  
// console.log(registros);
// console.log(registrosDoCpf);
//   	viewListaAtualizada.innerHTML = `
//   	<h5 class="reset color_green">
//   	${registros.length > 1 ? registros.length + " Registros Foram Analisados" : registros.length + " Registro Foi Analisado"}  
//   	</h5>
//   	<h3 class="reset">REGISTROS ATUALIZADOS:
//   	</h3>
  	
//   `;
//   // registros.forEach((item, index) => {
//   // 	const p = document.createElement("p");
//   // 	p.innerHTML += `${item}`;
//   // viewListaAtualizada.appendChild(p);
//   // });
//   const divs = document.createElement("div");
    
//   divs.classList.add("cpfRepetidoRegistros");
    
//   divs.classList.add("todosRegistros");
    
//   divs.innerHTML = `
//   <h3></h3>
//   <ul class="ulListas ulListasLenght scroll_bar">
//       ${Array.from(registrosUnico.values()).map(registro => `<li>${registro}</li>`).join("")}
//   </ul>
//   `;
    
//   viewListaAtualizada.appendChild(divs);
    
//   const ulLista = document.querySelectorAll(".ulListas");
    
//   const ulListasLenght = document.querySelectorAll(".ulListasLenght li");
    
//   const todosRegistrosH3 = document.querySelector(".todosRegistros h3");
    
//   const p = document.createElement("p");
  
//   p.style="margin: 0";

//   todosRegistrosH3.style="margin: 0";
  
//   p.innerHTML = `
//   ${ulListasLenght.length} Registros Atualizados (Sem Repetição de CPF + Vencimento ${atual.split("-").reverse().join("/")})`;
 
//   todosRegistrosH3.prepend(p);

//   let textoCompleto = [];
   
//   ulListasLenght.forEach((item, index) => {
//   const reg = item.textContent;
// 	textoCompleto.push(reg);
//   });
  
//   divs.addEventListener("click", () => {
//     	const viewListaCopia = document.querySelector("#viewListaCopia");
//     // Junta os itens do array com uma quebra de linha entre eles
//     const textoComQuebras = textoCompleto.join('\n');
    
//     navigator.clipboard.writeText(textoComQuebras)
//         .then(() => {
//       // Cria os elementos <li> dinamicamente
//             const listaItens = textoCompleto.map(item => `<li style="">${item}</li>`).join('');

//             // Insere os itens na <ul> dentro do container
//             viewListaCopia.innerHTML = `
//                           <p>ITENS COPIADOS</p>
//                 <div class="registrosCopiados">
//                     <ul class="ulListas scroll_bar">
//                         ${listaItens}
//                     </ul>
//                 </div>
//             `;

//             console.log("Texto copiado e exibido na lista!");
        
//         })
//         .catch(err => {
//             console.error("Erro ao copiar texto: ", err);
//         });
// });
// }
function percorre() {
    
  const viewListaAtualizada = document.querySelector("#viewListaAtualizada");
    
  
  
  // Data final
  const dataFinal = new Date(); 
    
  dataFinal.setMonth(dataFinal.getMonth() + 6); 
    
  let atual = dataFinal.toISOString().split("T")[0];
    
  atual = atual.split("-");
    
  atual[2] = atual[2] < 10 ? "0" + atual[2] : atual[2];
    
  atual = atual.join("-");

  // Função para validar CPF
  function validarCPF(cpf) {
      cpf = cpf.replace(/[^\d]+/g, ""); // Remover pontos e traços
      if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false; // Verificar tamanho e sequência repetida
      let soma = 0, resto;
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
  registros.forEach((item) => {
      const parte = item.split(";");
      // Validar CPF e remover caracteres desnecessários
      const cpfSemFormatacao = parte[0].replace(/[^\d]/g, "");
      const cpfValido = validarCPF(cpfSemFormatacao);

      if (cpfValido) {
          const nomeCompleto = parte[1].trim().toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(" ");
          const nome = nomeCompleto[0];
          const sobreNome = nomeCompleto[nomeCompleto.length - 1];
          const nomeRegistro = nome + " " + sobreNome;
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
  
  	viewListaAtualizada.innerHTML = `
  	<h5 class="reset color_green">
  	${registros.length > 1 ? registros.length + " Registros Foram Analisados" : registros.length + " Registro Foi Analisado"}  
  	</h5>
  	<h3 class="reset">REGISTROS ATUALIZADOS:
  	</h3>
  	
  `;
  // registros.forEach((item, index) => {
  // 	const p = document.createElement("p");
  // 	p.innerHTML += `${item}`;
  // viewListaAtualizada.appendChild(p);
  // });
  const divs = document.createElement("div");
    
  divs.classList.add("cpfRepetidoRegistros");
    
  divs.classList.add("todosRegistros");
    
  divs.innerHTML = `
  <h3></h3>
  <ul class="ulListas ulListasLenght scroll_bar">
      ${Array.from(registrosUnico.values()).map(registro => `<li>${registro}</li>`).join("")}
  </ul>
  `;
    
  viewListaAtualizada.appendChild(divs);
    
  const ulLista = document.querySelectorAll(".ulListas");
    
  const ulListasLenght = document.querySelectorAll(".ulListasLenght li");
    
  const todosRegistrosH3 = document.querySelector(".todosRegistros h3");
    
  const p = document.createElement("p");
  
  p.style="margin: 0";

  todosRegistrosH3.style="margin: 0";
  
  p.innerHTML = `
  ${ulListasLenght.length} Registros Atualizados (Sem Repetição de CPF + Vencimento ${atual.split("-").reverse().join("/")})`;
 
  todosRegistrosH3.prepend(p);

  let textoCompleto = [];
   
  ulListasLenght.forEach((item, index) => {
  const reg = item.textContent;
 	textoCompleto.push(reg);
   });
  
  divs.addEventListener("click", () => {
    	const viewListaCopia = document.querySelector("#viewListaCopia");
    // Junta os itens do array com uma quebra de linha entre eles
    const textoComQuebras = textoCompleto.join('\n');
    
    navigator.clipboard.writeText(textoComQuebras)
        .then(() => {
       // Cria os elementos <li> dinamicamente
            const listaItens = textoCompleto.map(item => `<li style="">${item}</li>`).join('');

            // Insere os itens na <ul> dentro do container
            viewListaCopia.innerHTML = `
                          <p>ITENS COPIADOS</p>
                <div class="registrosCopiados">
                    <ul class="ulListas scroll_bar">
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


const labelCheck = document.querySelector("#labelCheck");

const maisUm = document.querySelector("#maisUm");

const inputCheck = document.querySelectorAll(".boxe input[type=checkbox]");

inputCheck.forEach((item, index) => {
	console.log("inputCheck");
const inp = item.checked;
item.setAttribute("onclick", "marcaDesmarca(this)");
});

function marcaDesmarca(caller) {
  var checks = document.querySelectorAll('.boxe input[type="checkbox"]'); 
  // checks.forEach(c => c.checked = (c == caller) );
  if (maisUm.checked) {
  	return;
  } else {
  checks.forEach((c, i) => {
  	c.checked = (c == caller);
  });
  }
}


// itera com método do Array para compatibilidade
Array.prototype.forEach.call(document.querySelectorAll('.boxe input[type=checkbox], .boxe input[type=radio]'), function(radio) {
  radio.addEventListener('click', function() {
    var self = this;
    // obter elementos com o mesmo nome exceto o próprio e grava estado desmarcado
    Array.prototype.filter.call(document.getElementsByName(this.name), function(filterEl) {
      return self !== filterEl;
    }).forEach(function(otherEl) {
      delete otherEl.dataset.check;
    });

    // grava estado baseado no estado anterior
    if (this.dataset.hasOwnProperty('check')) {
      this.checked = false;
      delete this.dataset.check;
    } else {
      this.dataset.check = '';
    }
  }, false);
});
 
btnLabel.addEventListener("click",  () => {
	// listasText.value = "";
	let regs = "";
	inputCheck.forEach((item, index) => {
		if (item.checked && maisUm.checked) {
			if (item.id == "um") {
				regs = `03379443000;WAGNER LUIZ NUNES PADILHA;2024-09-20;2025-03-20;1;03379443000
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
				regs = `29044797832;ANDRE RYSEVAS BABBO;2024-09-20;2025-03-20;1;29044797832
03379443000;WAGNER LUIZ NUNES PADILHA;2024-09-20;2025-03-20;1;03379443000
03379443000;WAGNER LUIZ NUNES PADILHA;2024-09-20;2025-03-20;1;03379443000`;
listasText.value += regs;
			}
		  if (item.id == "tres") {
				regs = `29044797832;ANDRE RYSEVAS BABBO;2024-09-20;2025-03-20;1;29044797832
03379443000;WAGNER LUIZ NUNES PADILHA;2024-09-20;2025-03-20;1;03379443000`;
		  	listasText.value += regs;
		  }
		  if (item.id == "quatro") {
				regs = `03379443000;WAGNER LUIZ NUNES PADILHA;2024-09-20;2025-03-20;1;03379443000
29044797832;ANDRE RYSEVAS BABBO;2024-09-20;2025-03-20;1;29044797832
26435681848;ITALO DIMARZIO;2024-09-20;2025-03-20;1;26435681848`;
listasText.value += regs;

		  }
		} 
		else if (item.checked && !maisUm.checked) {
			if (item.id == "um") {
				regs = `03379443000;WAGNER LUIZ NUNES PADILHA;2024-09-20;2025-03-20;1;03379443000
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
				regs = `29044797832;ANDRE RYSEVAS BABBO;2024-09-20;2025-03-20;1;29044797832
03379443000;WAGNER LUIZ NUNES PADILHA;2024-09-20;2025-03-20;1;03379443000
03379443000;WAGNER LUIZ NUNES PADILHA;2024-09-20;2025-03-20;1;03379443000`;
listasText.value = regs;
			}
		  if (item.id == "tres") {
				regs = `29044797832;ANDRE RYSEVAS BABBO;2024-09-20;2025-03-20;1;29044797832
03379443000;WAGNER LUIZ NUNES PADILHA;2024-09-20;2025-03-20;1;03379443000`;
		  	listasText.value = regs;
		  }
		  if (item.id == "quatro") {
				regs = `03379443000;WAGNER LUIZ NUNES PADILHA;2024-09-20;2025-03-20;1;03379443000
29044797832;ANDRE RYSEVAS BABBO;2024-09-20;2025-03-20;1;29044797832
26435681848;ITALO DIMARZIO;2024-09-20;2025-03-20;1;26435681848`;
listasText.value = regs;

		  }
		}
		
	});
});

maisUm.addEventListener("click",  () => {
	if (maisUm.checked) {
		console.log("Var");
	}
	else {
		inputCheck.forEach(c => c.checked = false);
	}
});


function JSClock() {
  var tempo = new Date();
  var hora = tempo.getHours();
  var minuto = tempo.getMinutes();
  var segundo = tempo.getSeconds();
  var temp = "" + (hora > 12 ? hora - 12 : hora);
  if (hora == 0) temp = "12";
  temp += (minuto < 10 ? ":0" : ":") + minuto;
  temp += (segundo < 10 ? ":0" : ":") + segundo;
  temp += hora >= 12 ? " P.M." : " A.M.";
  return temp;
}

setInterval(function() {

  }, 1000);

filterInt = function (value) {
  if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value)) return Number(value);
  return NaN;
};