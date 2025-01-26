/*function vencimentos() {
    const label = document.getElementById("listasText").value; // Obter o texto do campo
    const viewListaVencidos = document.getElementById("viewListaVencidos"); // Elemento onde o resultado será exibido
    viewListaVencidos.innerHTML = ``; // Limpar o conteúdo anterior

    // Separar os registros por quebra de linha
    const registros = label.split(/\r?\n/);

    const hoje = new Date(); // Data atual
    const proximidade = 4; // Meses de proximidade
    const cpfsProcessados = new Set(); // Set para rastrear CPFs já exibidos

    // Função para normalizar nomes (letras maiúsculas e sem acentuações)
    const normalizarNome = nome => nome
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toUpperCase();

    // Filtrar registros próximos do vencimento
    const registrosVencidos = registros.filter(registro => {
        const partes = registro.split(";");

        if (partes.length >= 4) {
            const dataFinal = new Date(partes[3]); // Obter a data final
            const diffMeses = (dataFinal.getFullYear() - hoje.getFullYear()) * 12 + (dataFinal.getMonth() - hoje.getMonth());

            return diffMeses <= proximidade && diffMeses >= 0; // Próximo do vencimento
        }

        return false;
    });

    // Agrupar por CPF
    const registrosPorCPF = registrosVencidos.reduce((acc, registro) => {
        const partes = registro.split(";");
        const cpf = partes[0];
        partes[1] = normalizarNome(partes[1]); // Normalizar nome completo

        if (!acc[cpf]) acc[cpf] = [];
        acc[cpf].push(partes.join(";")); // Atualizar o registro ajustado

        return acc;
    }, {});

   // Exibir lista de CPFs com registros vencidos
    const spanDetalhes = document.createElement("div");
    spanDetalhes.classList.add("cpfRepetidoRegistros");
spanDetalhes.innerHTML = `
    <h3>CPFs com Registros Vencidos:</h3>
    <ul class="ulListas">
        ${Object.keys(registrosPorCPF)
            .filter(cpf => !cpfsProcessados.has(cpf)) // Garantir que o CPF ainda não foi processado
            .map(cpf => {
                cpfsProcessados.add(cpf); // Marcar o CPF como processado
                return `<li>${cpf} encontrado ${registrosPorCPF[cpf].length} ${registrosPorCPF[cpf].length > 1 ? "vezes" : "vez"}.</li>`;
            })
            .join("")}
    </ul>
`;
viewListaVencidos.prepend(spanDetalhes);

// Exibir registros completos para cada CPF
Object.keys(registrosPorCPF).forEach(cpf => {
    const div = document.createElement("div");
    div.classList.add("cpfRepetidoRegistros");
    div.innerHTML = `
        <p>
            O CPF ${cpf} possui ${registrosPorCPF[cpf].length} ${registrosPorCPF[cpf].length > 1 ? "registros vencidos" : "registro vencido"}.
        </p>
        <h4>Registros completos:</h4>
        <ul class="ulListas">
            ${registrosPorCPF[cpf].map(registro => `<li>${registro}</li>`).join("")}
        </ul>
    `;
    viewListaVencidos.appendChild(div);
});

    vencidos();
}*/
function vencimentos() {
    const viewListaVencidos = document.getElementById("viewListaVencidos");
    const label = document.getElementById("listasText").value;

    viewListaVencidos.innerHTML = ``; // Limpar o conteúdo anterior

    const registros = label.split(/\r?\n/); // Dividir os registros por linha
    const hoje = new Date(); // Data atual
    const cpfsProcessados = new Set(); // Set para rastrear CPFs já exibidos
     // Função para normalizar nomes (letras maiúsculas e sem acentuações)
    const normalizarNome = nome => nome
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toUpperCase();

    const registrosVencendo = registros.filter(registro => {
        const partes = registro.split(";"); // Dividir o registro em partes
        if (partes.length < 6) return false; // Ignorar registros incompletos

        const dataFinal = new Date(partes[3]); // Obter a data final
        const diferencaMeses =
            (dataFinal.getFullYear() - hoje.getFullYear()) * 12 +
            (dataFinal.getMonth() - hoje.getMonth()); // Diferença em meses

        return diferencaMeses <= 4 && diferencaMeses >= 0; // Verificar vencimento
    });

    if (registrosVencendo.length === 0) {
        viewListaVencidos.innerHTML = `<p>Nenhum registro próximo ao vencimento encontrado.</p>`;
        return;
    }
    
    // Agrupar por CPF
    const registrosPorCPF = registrosVencendo.reduce((acc, registro) => {
        const partes = registro.split(";");
        const cpf = partes[0];
        partes[1] = normalizarNome(partes[1]); // Normalizar nome completo

        if (!acc[cpf]) acc[cpf] = [];
        acc[cpf].push(partes.join(";")); // Atualizar o registro ajustado

        return acc;
    }, {});

    // Criar uma estrutura para listar todos os CPFs próximos ao vencimento
    const listaCPFs = registrosVencendo.map(registro => {
        const partes = registro.split(";");
        const cpf = partes[0];
        const dataFinal = partes[3];
        return `${cpf} com vencimento em ${dataFinal}`;
    });

    const divResumo = document.createElement("div");
    divResumo.classList.add("cpfRepetidoRegistros");
    divResumo.innerHTML = `
       <h3>CPFs com Registros Vencidos:</h3>
    <ul class="ulListas">
        ${Object.keys(registrosPorCPF)
            .filter(cpf => !cpfsProcessados.has(cpf)) // Garantir que o CPF ainda não foi processado
            .map(cpf => {
                cpfsProcessados.add(cpf); // Marcar o CPF como processado
                return `<li>${cpf} encontrado ${registrosPorCPF[cpf].length} ${registrosPorCPF[cpf].length > 1 ? "vezes" : "vez"}.</li>`;
            })
            .join("")}
    </ul>
    `;

    // Adicionar o resumo acima dos detalhes individuais
    viewListaVencidos.appendChild(divResumo);

    // Adicionar detalhes individuais
    registrosVencendo.forEach(registro => {
        const partes = registro.split(";");
        const cpf = partes[0];
        const nome = partes[1];
        let nomes = nome;
        nomes = nomes.split(" ");
        nomes = nomes[0] + " " + nomes.pop();
        console.log(nomes);
        const dataFinal = partes[3];
        const div = document.createElement("div");

        div.classList.add("cpfRepetidoRegistros");
        div.innerHTML = `
            <p>
                O CPF ${cpf} está próximo do vencimento.
            </p>
            <h4>Registro completo:</h4>
            <ul class="ulListas">
                <li><strong>CPF:</strong> ${cpf}</li>
                <li><strong>Nome:</strong> ${nomes}</li>
                <li><strong>Data Final:</strong> ${dataFinal}</li>
            </ul>
        `;

        viewListaVencidos.appendChild(div);
    });
    vencidos();
}


/*function difDias(inicial, final) {
	let fim = final;
let inicio = inicial;
const diffEmMs = new Date(fim) - new Date(inicio);
const diffEmDays = diffEmMs / (1000 * 60 * 60 * 24);
return console.log(diffEmDays);
}

function vencidos() {
    const label = document.getElementById("listasText").value; // Obter o texto do campo
    const viewListaVencidos = document.getElementById("viewListaJaVencidos"); // Elemento onde o resultado será exibido
    viewListaVencidos.innerHTML = ``; // Limpar o conteúdo anterior

    // Separar os registros por quebra de linha
    const registros = label.split(/\r?\n/);

    const hoje = new Date(); // Data atual
    const proximidade = 0; // Meses de proximidade
    const cpfsProcessados = new Set(); // Set para rastrear CPFs já exibidos

    // Função para normalizar nomes (letras maiúsculas e sem acentuações)
    const normalizarNome = nome => nome
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toUpperCase();

    // Filtrar registros próximos do vencimento
    const registrosVencidos = registros.filter(registro => {
        const partes = registro.split(";");
// console.log(partes[1].trim());
        if (partes.length >= 4) {
            const dataFinal = new Date(partes[3]); // Obter a data final
            const diffMeses = (dataFinal.getFullYear() - hoje.getFullYear()) * 12 + (dataFinal.getMonth() - hoje.getMonth());
            
 //difDias(hoje.toISOString().split("T")[0], dataFinal);
 
let dFim = (dataFinal.getMonth() + 1);

// dFim < 10 ? dFim =  parseInt("0") + dFim : dFim = dFim;

dFim < 10 ? dFim = dFim.toString().padStart(2, '0') : dFim = dFim;
const n = dFim;

            // return diffMeses <= proximidade && diffMeses >= 0; // Próximo do vencimento
            return difDias(hoje.toISOString().split("T")[0], dataFinal) <= 1 ; // Próximo do vencimento
        }

        return false;
    });

    // Agrupar por CPF
    const registrosPorCPF = registrosVencidos.reduce((acc, registro) => {
        const partes = registro.split(";");
        const cpf = partes[0];
        partes[1] = normalizarNome(partes[1]); // Normalizar nome completo

        if (!acc[cpf]) acc[cpf] = [];
        acc[cpf].push(partes.join(";")); // Atualizar o registro ajustado

        return acc;
    }, {});

    // Exibir lista de CPFs próximos do vencimento
    const spanDetalhes = document.createElement("div");
    spanDetalhes.classList.add("cpfRepetidoRegistros");
    spanDetalhes.innerHTML = `
        <h3>CPFs Próximos do Vencimento:</h3>
        <ul class="ulListas">
            ${Object.keys(registrosPorCPF)
                .filter(cpf => !cpfsProcessados.has(cpf)) // Garantir que o CPF ainda não foi processado
                .map(cpf => {
                    cpfsProcessados.add(cpf); // Marcar o CPF como processado
                    return `<li>${cpf} encontrado ${registrosPorCPF[cpf].length} ${registrosPorCPF[cpf].length > 1 ? "vezes" : "vez"}.</li>`;
                })
                .join("")}
        </ul>
    `;
    viewListaVencidos.prepend(spanDetalhes);

    // Exibir registros completos para cada CPF
    Object.keys(registrosPorCPF).forEach(cpf => {
        const div = document.createElement("div");
        div.classList.add("cpfRepetidoRegistros");
        div.innerHTML = `
            <p>
                O CPF ${cpf} está próximo do vencimento em ${registrosPorCPF[cpf].length} ${registrosPorCPF[cpf].length > 1 ? "registros" : "registro"}.
            </p>
            <h4>Registros completos:</h4>
            <ul class="ulListas">
                ${registrosPorCPF[cpf].map(registro => `<li>${registro}</li>`).join("")}
            </ul>
        `;
        viewListaVencidos.appendChild(div);
    });
}*/
function difDias(inicial, final) {
    const diffEmMs = new Date(final) - new Date(inicial);
    const diffEmDays = diffEmMs / (1000 * 60 * 60 * 24);
    return diffEmDays;
}

function vencidos() {
    const label = document.getElementById("listasText").value; // Obter o texto do campo
    const viewListaVencidos = document.getElementById("viewListaJaVencidos"); // Elemento onde o resultado será exibido
    viewListaVencidos.innerHTML = ``; // Limpar o conteúdo anterior

    // Separar os registros por quebra de linha
    const registros = label.split(/\r?\n/);

    const hoje = new Date(); // Data atual
    const cpfsProcessados = new Set(); // Set para rastrear CPFs já exibidos

    // Função para normalizar nomes (letras maiúsculas e sem acentuações)
    const normalizarNome = nome => nome
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toUpperCase();

    // Filtrar registros já vencidos
    const registrosVencidos = registros.filter(registro => {
        const partes = registro.split(";");
        if (partes.length >= 4) {
            const dataFinal = new Date(partes[3]); // Obter a data final
            // Verificar se a data final é anterior à data atual
            return dataFinal < hoje;
        }
        return false;
    });

    // Agrupar por CPF
    const registrosPorCPF = registrosVencidos.reduce((acc, registro) => {
        const partes = registro.split(";");
        const cpf = partes[0];
        partes[1] = normalizarNome(partes[1]); // Normalizar nome completo

        if (!acc[cpf]) acc[cpf] = [];
        acc[cpf].push(partes.join(";")); // Atualizar o registro ajustado

        return acc;
    }, {});
console.log(registrosPorCPF);
    // Exibir lista de CPFs já vencidos
    const spanDetalhes = document.createElement("div");
    spanDetalhes.classList.add("cpfRepetidoRegistros");
    spanDetalhes.innerHTML = `
        <h3>CPFs com Registros Vencidos:</h3>
        <ul class="ulListas">
            ${Object.keys(registrosPorCPF)
                .filter(cpf => !cpfsProcessados.has(cpf)) // Garantir que o CPF ainda não foi processado
                .map(cpf => {
                    cpfsProcessados.add(cpf); // Marcar o CPF como processado
            
                    return `<li>${cpf} encontrado ${registrosPorCPF[cpf].length} ${registrosPorCPF[cpf].length > 1 ? "vezes" : "vez"}.</li>`;
                })
                .join("")}
        </ul>
    `;
    viewListaVencidos.prepend(spanDetalhes);

    // Exibir registros completos para cada CPF
    Object.keys(registrosPorCPF).forEach(cpf => {
        const div = document.createElement("div");
        div.classList.add("cpfRepetidoRegistros");
        div.innerHTML = `
            <p>
                O CPF ${cpf} possui ${registrosPorCPF[cpf].length} ${registrosPorCPF[cpf].length > 1 ? "registros vencidos" : "registro vencido"}.
            </p>
            <h4>Registros completos:</h4>
            <ul class="ulListas">
                ${registrosPorCPF[cpf].map(registro => `<li>${registro}</li>`).join("")}
            </ul>
        `;
        viewListaVencidos.appendChild(div);
    });
}


function ajusteDataFim() {
    const label = document.getElementById("listasText").value; // Obter o texto do campo
    const viewAjustesData = document.getElementById("viewAjustesData"); // Elemento onde o resultado será exibido
    const invalidos = document.getElementById("invalidos"); // Mensagem para exibir possíveis erros
    viewAjustesData.innerHTML = ``; // Limpar o conteúdo anterior
    invalidos.innerHTML = ``;

    const hoje = new Date(); // Data atual
    const dataFinal = new Date(); // Data final
    dataFinal.setMonth(dataFinal.getMonth() + 6); // Adicionar 6 meses à data atual
let atual = dataFinal.toISOString().split("T")[0];
atual = atual.split("-");
atual[2] = atual[2] - 1;
atual[2] < 10 ? atual[2] = "0" + atual[2] : atual[2] = atual[2];
atual = atual.join("-");

    // Separar os registros por quebra de linha
    const registros = label.split(/\r?\n/);

    // Usando um Set para evitar duplicação de registros
    const cpfsProcessados = new Set();

    const registrosAjustados = registros.map(registro => {
        const partes = registro.split(";");

        if (partes.length < 4) {
            invalidos.innerHTML += `<p>Registro inválido ou incompleto: ${registro}</p>`;
            return registro; // Retornar registro sem alteração
        }

        try {
            // Processar o nome
            const nomeCompleto = partes[1].normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Remover acentos
            const nomes = nomeCompleto.split(" ");
            const primeiroNome = nomes[0].toUpperCase();
            const ultimoSobrenome = nomes[nomes.length - 1].toUpperCase();
            const nomeAjustado = `${primeiroNome} ${ultimoSobrenome}`;

            // Atualizar as partes do registro
            partes[1] = nomeAjustado; // Nome ajustado
            partes[2] = 
            partes[2];
            // hoje.toISOString().split("T")[0]; // Data inicial (hoje)
            partes[3] = 
            atual;
            // dataFinal.toISOString().split("T")[0]; // Nova data final (6 meses a partir de hoje)

            if (!cpfsProcessados.has(partes[0])) {
                cpfsProcessados.add(partes[0]); // Marcar CPF como processado
                return partes.join(";");
            }

            return ""; // Ignorar registros repetidos
        } catch (error) {
            invalidos.innerHTML += `<p>Erro ao ajustar registro: ${registro}</p>`;
            return registro; // Retornar registro sem alteração
        }
    }).filter(registro => registro !== ""); // Filtrar registros vazios (repetidos)

    // Atualizar o innerHTML com os registros ajustados, cada um em uma linha
    viewAjustesData.innerHTML = registrosAjustados.join("<br>");

    const textoCompleto = registrosAjustados.join("\n");

    // Evento para copiar o texto ajustado ao clicar
    viewAjustesData.addEventListener("click", () => {
        navigator.clipboard
            .writeText(textoCompleto)
            .then(() => {
                invalidos.innerHTML = `<p class="invalido">Itens ajustados copiados com sucesso!</p>`;
                setTimeout(() => (invalidos.innerHTML = ``), 3500);
            })
            .catch(err => {
                console.error("Erro ao copiar texto: ", err);
                invalidos.innerHTML = `<p class="invalido">Erro ao copiar texto!</p>`;
            });
    });
}

function percorre() {
    const viewListas = document.querySelector("#viewLista");
    viewListas.innerHTML = ``;

    // Obter o conteúdo do elemento <label>
    const label = document.getElementById("listasText").value;
    // Expressão regular para encontrar CPFs (sequências de 11 dígitos)
    const regexCPF = /\b\d{11}\b/g;

    // Extrair CPFs do texto
    const cpfs = label.match(regexCPF);

    // Criar um mapa para contar as ocorrências
    const cpfCounts = cpfs.reduce((acc, cpf) => {
        acc[cpf] = (acc[cpf] || 0) + 1;
        return acc;
    }, {});

    // Separar os CPFs repetidos (mais de 2 ocorrências)
    const repeatedCPFs = Object.keys(cpfCounts).filter(cpf => cpfCounts[cpf] > 2);

    // Dividir o texto original em registros com base em quebras (supondo registros separados por espaço ou quebra de linha)
    const registros = label.split(/(?<=\d{11})\s+/);

    // Identificar os registros completos que contêm CPFs repetidos
    const registrosRepetidos = registros.filter(registro => repeatedCPFs.some(cpf => registro.includes(cpf)));

    // Verificar se há CPFs repetidos
    if (repeatedCPFs.length === 0) {
        console.log("Nenhum CPF repetido encontrado.");
    }

    // Exibir a quantidade de vezes que cada CPF repetido foi encontrado
    repeatedCPFs.forEach(cpf => {
        // Filtrar os registros para o CPF atual
        const registrosDoCpf = registrosRepetidos.filter(registro => registro.includes(cpf));
        
        const div = document.createElement("div");
        div.classList.add("cpfRepetidoRegistros");
        div.innerHTML = `
        <p>
        O CPF ${cpf} foi encontrado em ${registrosDoCpf.length} ${registrosDoCpf.length > 1 ? "registros" : "registro"}.
        </p>
        <ul class="ulListas">
            ${registrosDoCpf.map(registro => `<li>${registro}</li>`).join("")}
        </ul>
    `;
        viewListas.appendChild(div);
    });
}

// Função para ajustar os registros, evitando duplicação de CPF
const ajustarRegistros = (registros) => {
    const cpfsProcessados = new Set(); // Para rastrear CPFs já processados
    return registros.map(registro => {
        const partes = registro.split(";");
        if (partes.length > 1) {
            const cpf = partes[0];
            
            // Verifica se o CPF já foi processado para evitar duplicação
            if (cpfsProcessados.has(cpf)) {
                return ""; // Retorna uma string vazia para ignorar registros duplicados
            }
            cpfsProcessados.add(cpf); // Marca o CPF como processado

            partes[1] = obterPrimeiroEUltimoNome(partes[1]);
        }
        return partes.join(";");
    }).filter(registro => registro !== ""); // Filtra os registros vazios (duplicados)
};

// Função para obter o primeiro e o último nome, considerando as partículas
const obterPrimeiroEUltimoNome = (nomeCompleto) => {
    const ignorarParticulas = ["da", "de", "do", "das", "dos", "e", "a", "o"];
    const nomes = nomeCompleto.trim().split(" ");
    const primeiroNome = nomes[0];
    let ultimoSobrenome = nomes[nomes.length - 1];

    // Verifica se o último sobrenome é uma partícula e ajusta
    if (ignorarParticulas.includes(ultimoSobrenome.toLowerCase()) && nomes.length > 1) {
        ultimoSobrenome = nomes[nomes.length - 2];
    }

    return `${primeiroNome.toUpperCase()} ${ultimoSobrenome.toUpperCase()}`;
};

// Função para atualizar a visualização no DOM
const atualizarView = (elemento, registrosAjustados) => {
    elemento.innerHTML = registrosAjustados.join("<br>");
};

// Função para copiar registros para a área de transferência
const copiarRegistros = (textoCompleto, abrirPopup, fecharPopup, invalido, conteudoTexto) => {
    navigator.clipboard.writeText(textoCompleto.split("<br>").join("\n"))
        .then(() => {
            invalido.innerHTML = "Itens copiados com sucesso!";
            abrirPopup.click();
            conteudoTexto.innerHTML = textoCompleto.split("<br>").join("\n");
            setTimeout(() => {
                invalido.style.visibility = "hidden";
                fecharPopup.click();
            }, 3500);
        })
        .catch(err => {
            console.error("Erro ao copiar texto: ", err);
        });
};

// Função principal
function ajuste() {
    const label = document.getElementById("listasText").value;
    const viewAjustes = document.getElementById("viewAjustes");

    viewAjustes.innerHTML = ``;

    const registros = label.split(/\r?\n/);
    const registrosAjustados = ajustarRegistros(registros);

    atualizarView(viewAjustes, registrosAjustados);

    const textoCompleto = registrosAjustados.join("<br>");
    viewAjustes.addEventListener("click", () => {
        const abrir = document.querySelector("#abrir-popup-btn");
        const fechar = document.querySelector("#fechar-popup-btn");
        const invalido = document.querySelector("#invalido");
        const conteudo = document.querySelector("#conteudo");
        const conteudoTexto = conteudo.querySelector("p");

        copiarRegistros(textoCompleto, abrir, fechar, invalido, conteudoTexto);
    });
}
