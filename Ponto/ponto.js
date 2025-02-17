
// function selecionarFuncionarioECalcularHoras(funcionarios) {
//     let nomesFuncionarios = funcionarios.map(f => `${f.id} - ${f.nome}`).join("\n");
//     let idSelecionado = prompt(`Selecione um funcionário pelo ID:\n${nomesFuncionarios}`, 10);
    
//     if (!idSelecionado) return;

//     let funcionario = funcionarios.find(f => f.id == idSelecionado.trim());
// console.log(funcionario.id);
// console.log(funcionarios.length);
//     if (!funcionario) {
//         alert("Funcionário não encontrado!");
//         return;
//     }

//     let mesSelecionado = prompt("Digite o mês desejado (formato MM):", `01`);

//     if (!mesSelecionado || !/^\d{2}$/.test(mesSelecionado)) {
//         alert("Mês inválido!");
//         return;
//     }

//     let resultado = calcularHorasTrabalhadas(funcionario, mesSelecionado);
//     // console.log(`Horas trabalhadas por ${funcionario.nome} no mês ${mesSelecionado}: ${resultado.horasTrabalhadas}`);
//     // console.log(`Horas de intervalo por ${funcionario.nome} no mês ${mesSelecionado}: ${resultado.horasIntervalo}`);
//     console.log(resultado.mensagemSemIntervalo);
//     viewDomPonto(funcionario.nome, mesSelecionado, resultado.horasTrabalhadas, resultado.mensagemSemIntervalo);
// }
const btn_ponto_auto = document.querySelector("#btn_ponto_auto");
btn_ponto_auto.addEventListener("click",  () => {
// const pontosUltras = ()=>{
// 	return `10	mauricio	Not Set7	 2025-01-02     13:00:00	1
// 10	mauricio	Not Set7	 2025-01-02     16:00:00	1
// 10	mauricio	Not Set7	 2025-01-02     17:00:00	1
// 10	mauricio	Not Set7	 2025-01-02     21:20:00	1
// `;
// };
const pontoUltra = ()=>{
	return `
13	barbara souza	Not Set1	 2025-01-02     04:52:56	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-02     07:45:04	1
13	barbara souza	Not Set1	 2025-01-02     10:24:30	1
13	barbara souza	Not Set1	 2025-01-02     11:21:48	1
8	lurdes	Not Set1	 2025-01-02     11:39:39	1
10	mauricio	Not Set7	 2025-01-02     12:43:08	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-02     13:19:40	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-02     14:20:19	1
15	robson	Not Set6	 2025-01-02     14:31:11	1
11	marcia	Not Set1	 2025-01-02     14:34:50	1
8	lurdes	Not Set1	 2025-01-02     15:02:17	1
8	lurdes	Not Set1	 2025-01-02     16:00:17	1
10	mauricio	Not Set7	 2025-01-02     16:51:19	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-02     16:53:51	1
10	mauricio	Not Set7	 2025-01-02     17:47:19	1
15	robson	Not Set6	 2025-01-02     18:27:01	1
11	marcia	Not Set1	 2025-01-02     19:13:44	1
15	robson	Not Set6	 2025-01-02     19:29:48	1
8	lurdes	Not Set1	 2025-01-02     20:03:32	1
11	marcia	Not Set1	 2025-01-02     20:10:04	1
10	mauricio	Not Set7	 2025-01-02     21:03:50	1
15	robson	Not Set6	 2025-01-02     22:47:38	1
11	marcia	Not Set1	 2025-01-02     22:58:35	1
13	barbara souza	Not Set1	 2025-01-03     04:55:58	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-03     07:48:50	1
13	barbara souza	Not Set1	 2025-01-03     08:40:16	1
13	barbara souza	Not Set1	 2025-01-03     09:51:10	1
8	lurdes	Not Set1	 2025-01-03     11:40:03	1
12	nath	Not Set1	 2025-01-03     13:46:43	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-03     13:48:01	1
15	robson	Not Set6	 2025-01-03     14:38:11	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-03     14:45:56	1
11	marcia	Not Set1	 2025-01-03     14:58:55	1
8	lurdes	Not Set1	 2025-01-03     15:05:49	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-03     15:58:46	1
8	lurdes	Not Set1	 2025-01-03     16:05:13	1
10	mauricio	Not Set7	 2025-01-03     16:10:57	1
12	nath	Not Set1	 2025-01-03     17:16:08	1
15	robson	Not Set6	 2025-01-03     17:58:01	1
12	nath	Not Set1	 2025-01-03     18:14:24	1
15	robson	Not Set6	 2025-01-03     19:00:29	1
8	lurdes	Not Set1	 2025-01-03     20:02:03	1
10	mauricio	Not Set7	 2025-01-03     20:27:04	1
12	nath	Not Set1	 2025-01-03     21:58:32	1
15	robson	Not Set6	 2025-01-03     22:50:05	1
11	marcia	Not Set1	 2025-01-03     23:02:29	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-04     07:45:55	1
10	mauricio	Not Set7	 2025-01-04     07:45:58	1
12	nath	Not Set1	 2025-01-04     09:42:32	1
10	mauricio	Not Set7	 2025-01-04     10:43:23	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-04     10:46:41	1
10	mauricio	Not Set7	 2025-01-04     11:41:27	1
12	nath	Not Set1	 2025-01-04     11:45:10	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-04     12:00:19	1
12	nath	Not Set1	 2025-01-04     12:44:11	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-04     13:54:41	1
10	mauricio	Not Set7	 2025-01-04     14:41:37	1
12	nath	Not Set1	 2025-01-04     16:52:21	1
11	marcia	Not Set1	 2025-01-05     07:34:28	1
15	robson	Not Set6	 2025-01-05     07:59:22	1
15	robson	Not Set6	 2025-01-05     13:57:42	1
11	marcia	Not Set1	 2025-01-05     14:04:47	1
13	barbara souza	Not Set1	 2025-01-06     04:53:52	1
9	manuella meireles	Not Set1	 2025-01-06     07:45:11	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-06     07:47:51	1
13	barbara souza	Not Set1	 2025-01-06     10:15:02	1
13	barbara souza	Not Set1	 2025-01-06     11:22:06	1
8	lurdes	Not Set1	 2025-01-06     11:40:13	1
12	nath	Not Set1	 2025-01-06     12:49:51	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-06     12:50:04	1
13	barbara souza	Not Set1	 2025-01-06     13:25:14	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-06     13:52:02	1
9	manuella meireles	Not Set1	 2025-01-06     14:00:21	1
10	mauricio	Not Set7	 2025-01-06     14:17:42	1
15	robson	Not Set6	 2025-01-06     14:39:39	1
8	lurdes	Not Set1	 2025-01-06     15:01:00	1
6	alisson carvalho	Not Set1	 2025-01-06     15:05:37	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-06     15:52:46	1
8	lurdes	Not Set1	 2025-01-06     16:00:04	1
12	nath	Not Set1	 2025-01-06     16:41:43	1
15	robson	Not Set6	 2025-01-06     16:54:26	1
12	nath	Not Set1	 2025-01-06     17:35:50	1
10	mauricio	Not Set7	 2025-01-06     17:53:22	1
15	robson	Not Set6	 2025-01-06     18:01:35	1
6	alisson carvalho	Not Set1	 2025-01-06     18:37:39	1
10	mauricio	Not Set7	 2025-01-06     18:50:44	1
6	alisson carvalho	Not Set1	 2025-01-06     19:54:38	1
8	lurdes	Not Set1	 2025-01-06     20:06:25	1
10	mauricio	Not Set7	 2025-01-06     21:21:21	1
15	robson	Not Set6	 2025-01-06     21:47:24	1
6	alisson carvalho	Not Set1	 2025-01-06     22:57:52	1
12	nath	Not Set1	 2025-01-06     23:00:08	1
13	barbara souza	Not Set1	 2025-01-07     04:47:59	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-07     07:33:11	1
9	manuella meireles	Not Set1	 2025-01-07     07:57:57	1
13	barbara souza	Not Set1	 2025-01-07     09:43:31	1
13	barbara souza	Not Set1	 2025-01-07     10:58:03	1
8	lurdes	Not Set1	 2025-01-07     11:40:02	1
10	mauricio	Not Set7	 2025-01-07     12:55:04	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-07     12:56:51	1
12	nath	Not Set1	 2025-01-07     13:03:31	1
13	barbara souza	Not Set1	 2025-01-07     13:29:56	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-07     13:55:28	1
15	robson	Not Set6	 2025-01-07     14:12:30	1
8	lurdes	Not Set1	 2025-01-07     15:21:07	1
12	nath	Not Set1	 2025-01-07     15:48:04	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-07     16:02:16	1
8	lurdes	Not Set1	 2025-01-07     16:21:15	1
12	nath	Not Set1	 2025-01-07     16:34:37	1
15	robson	Not Set6	 2025-01-07     17:55:23	1
15	robson	Not Set6	 2025-01-07     18:58:33	1
8	lurdes	Not Set1	 2025-01-07     20:04:17	1
10	mauricio	Not Set7	 2025-01-07     20:45:37	1
15	robson	Not Set6	 2025-01-07     21:37:59	1
12	nath	Not Set1	 2025-01-07     22:59:01	1
13	barbara souza	Not Set1	 2025-01-08     04:48:44	1
9	manuella meireles	Not Set1	 2025-01-08     07:49:06	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-08     08:00:33	1
8	lurdes	Not Set1	 2025-01-08     11:40:59	1
12	nath	Not Set1	 2025-01-08     12:36:39	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-08     12:52:21	1
13	barbara souza	Not Set1	 2025-01-08     13:19:49	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-08     13:54:38	1
10	mauricio	Not Set7	 2025-01-08     14:07:41	1
8	lurdes	Not Set1	 2025-01-08     15:16:28	1
15	robson	Not Set6	 2025-01-08     15:19:34	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-08     15:45:13	1
8	lurdes	Not Set1	 2025-01-08     16:21:18	1
12	nath	Not Set1	 2025-01-08     17:26:15	1
12	nath	Not Set1	 2025-01-08     18:28:48	1
10	mauricio	Not Set7	 2025-01-08     18:32:38	1
10	mauricio	Not Set7	 2025-01-08     19:11:20	1
15	robson	Not Set6	 2025-01-08     19:20:23	1
8	lurdes	Not Set1	 2025-01-08     20:07:12	1
15	robson	Not Set6	 2025-01-08     20:10:24	1
10	mauricio	Not Set7	 2025-01-08     20:19:09	1
15	robson	Not Set6	 2025-01-08     22:46:46	1
12	nath	Not Set1	 2025-01-08     22:52:19	1
13	barbara souza	Not Set1	 2025-01-09     04:49:06	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-09     07:58:10	1
8	lurdes	Not Set1	 2025-01-09     11:41:12	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-09     12:57:07	1
10	mauricio	Not Set7	 2025-01-09     13:24:37	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-09     13:56:46	1
12	nath	Not Set1	 2025-01-09     14:04:37	1
9	manuella meireles	Not Set1	 2025-01-09     14:25:21	1
15	robson	Not Set6	 2025-01-09     14:42:59	1
16	moacir xavier	Not Set1	 2025-01-09     15:04:02	1
8	lurdes	Not Set1	 2025-01-09     15:05:24	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-09     15:54:23	1
8	lurdes	Not Set1	 2025-01-09     16:06:32	1
12	nath	Not Set1	 2025-01-09     16:23:33	1
10	mauricio	Not Set7	 2025-01-09     17:00:30	1
12	nath	Not Set1	 2025-01-09     17:21:00	1
16	moacir xavier	Not Set1	 2025-01-09     17:39:07	1
10	mauricio	Not Set7	 2025-01-09     17:49:36	1
16	moacir xavier	Not Set1	 2025-01-09     18:38:52	1
15	robson	Not Set6	 2025-01-09     18:47:55	1
15	robson	Not Set6	 2025-01-09     19:56:47	1
8	lurdes	Not Set1	 2025-01-09     20:00:14	1
10	mauricio	Not Set7	 2025-01-09     21:20:58	1
15	robson	Not Set6	 2025-01-09     22:48:38	1
16	moacir xavier	Not Set1	 2025-01-09     23:03:16	1
15	robson	Not Set6	 2025-01-10     07:58:27	1
8	lurdes	Not Set1	 2025-01-10     11:40:03	1
15	robson	Not Set6	 2025-01-10     11:57:42	1
15	robson	Not Set6	 2025-01-10     13:01:20	1
10	mauricio	Not Set7	 2025-01-10     13:05:01	1
12	nath	Not Set1	 2025-01-10     13:10:11	1
13	barbara souza	Not Set1	 2025-01-10     13:14:46	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-10     14:39:02	1
16	moacir xavier	Not Set1	 2025-01-10     14:43:39	1
8	lurdes	Not Set1	 2025-01-10     15:07:40	1
15	robson	Not Set6	 2025-01-10     16:00:05	1
8	lurdes	Not Set1	 2025-01-10     16:06:03	1
12	nath	Not Set1	 2025-01-10     16:40:14	1
10	mauricio	Not Set7	 2025-01-10     17:22:58	1
12	nath	Not Set1	 2025-01-10     17:39:44	1
10	mauricio	Not Set7	 2025-01-10     18:28:09	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-10     18:46:33	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-10     19:49:14	1
8	lurdes	Not Set1	 2025-01-10     20:03:38	1
16	moacir xavier	Not Set1	 2025-01-10     20:04:20	1
16	moacir xavier	Not Set1	 2025-01-10     21:07:24	1
10	mauricio	Not Set7	 2025-01-10     21:21:50	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-10     22:57:54	1
12	nath	Not Set1	 2025-01-10     23:00:25	1
16	moacir xavier	Not Set1	 2025-01-10     23:03:02	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-11     07:51:56	1
10	mauricio	Not Set7	 2025-01-11     08:02:03	1
8	lurdes	Not Set1	 2025-01-11     09:38:10	1
16	moacir xavier	Not Set1	 2025-01-11     09:41:57	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-11     11:27:21	1
10	mauricio	Not Set7	 2025-01-11     11:58:23	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-11     12:48:52	1
10	mauricio	Not Set7	 2025-01-11     12:56:07	1
16	moacir xavier	Not Set1	 2025-01-11     13:00:02	1
8	lurdes	Not Set1	 2025-01-11     13:40:41	1
16	moacir xavier	Not Set1	 2025-01-11     14:08:56	1
8	lurdes	Not Set1	 2025-01-11     14:40:34	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-11     14:57:37	1
10	mauricio	Not Set7	 2025-01-11     15:20:04	1
8	lurdes	Not Set1	 2025-01-11     17:02:26	1
16	moacir xavier	Not Set1	 2025-01-11     17:06:38	1
16	moacir xavier	Not Set1	 2025-01-12     07:54:54	1
15	robson	Not Set6	 2025-01-12     08:19:52	1
15	robson	Not Set6	 2025-01-12     14:00:02	1
13	barbara souza	Not Set1	 2025-01-12     14:04:33	1
13	barbara souza	Not Set1	 2025-01-13     04:48:54	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-13     07:50:16	1
9	manuella meireles	Not Set1	 2025-01-13     07:58:28	1
13	barbara souza	Not Set1	 2025-01-13     09:50:01	1
13	barbara souza	Not Set1	 2025-01-13     10:42:23	1
8	lurdes	Not Set1	 2025-01-13     11:40:07	1
10	mauricio	Not Set7	 2025-01-13     12:51:07	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-13     12:59:21	1
13	barbara souza	Not Set1	 2025-01-13     13:11:21	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-13     14:02:33	1
8	lurdes	Not Set1	 2025-01-13     15:00:16	1
12	nath	Not Set1	 2025-01-13     15:27:30	1
8	lurdes	Not Set1	 2025-01-13     16:00:15	1
10	mauricio	Not Set7	 2025-01-13     17:03:18	1
10	mauricio	Not Set7	 2025-01-13     18:02:14	1
12	nath	Not Set1	 2025-01-13     18:19:21	1
12	nath	Not Set1	 2025-01-13     19:18:25	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-13     19:52:32	1
10	mauricio	Not Set7	 2025-01-13     21:20:16	1
12	nath	Not Set1	 2025-01-13     22:57:27	1
8	lurdes	Not Set1	 2025-01-13     23:00:15	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-14     07:55:38	1
13	barbara souza	Not Set1	 2025-01-14     10:21:34	1
13	barbara souza	Not Set1	 2025-01-14     11:23:13	1
8	lurdes	Not Set1	 2025-01-14     11:40:04	1
10	mauricio	Not Set7	 2025-01-14     12:51:07	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-14     13:04:12	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-14     14:03:47	1
12	nath	Not Set1	 2025-01-14     14:26:32	1
17	lays	Not Set1	 2025-01-14     14:28:48	1
8	lurdes	Not Set1	 2025-01-14     15:00:17	1
8	lurdes	Not Set1	 2025-01-14     16:00:14	1
12	nath	Not Set1	 2025-01-14     16:20:07	1
12	nath	Not Set1	 2025-01-14     17:20:38	1
10	mauricio	Not Set7	 2025-01-14     17:41:31	1
10	mauricio	Not Set7	 2025-01-14     18:22:07	1
8	lurdes	Not Set1	 2025-01-14     19:43:49	1
17	lays	Not Set1	 2025-01-14     19:56:55	1
17	lays	Not Set1	 2025-01-14     20:55:03	1
10	mauricio	Not Set7	 2025-01-14     21:01:22	1
12	nath	Not Set1	 2025-01-14     22:54:00	1
17	lays	Not Set1	 2025-01-14     22:54:05	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-14     22:54:11	1
13	barbara souza	Not Set1	 2025-01-15     04:48:39	1
18	juliana	Not Set1	 2025-01-15     04:48:41	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-15     08:18:29	1
18	juliana	Not Set1	 2025-01-15     08:30:26	1
18	juliana	Not Set1	 2025-01-15     09:30:03	1
8	lurdes	Not Set1	 2025-01-15     11:40:04	1
10	mauricio	Not Set7	 2025-01-15     12:48:30	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-15     13:01:10	1
18	juliana	Not Set1	 2025-01-15     13:08:13	1
13	barbara souza	Not Set1	 2025-01-15     13:16:11	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-15     14:01:45	1
17	lays	Not Set1	 2025-01-15     14:32:56	1
12	nath	Not Set1	 2025-01-15     14:36:58	1
8	lurdes	Not Set1	 2025-01-15     15:13:12	1
8	lurdes	Not Set1	 2025-01-15     16:13:24	1
12	nath	Not Set1	 2025-01-15     16:41:50	1
12	nath	Not Set1	 2025-01-15     17:39:50	1
17	lays	Not Set1	 2025-01-15     19:06:54	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-15     19:50:01	1
17	lays	Not Set1	 2025-01-15     20:03:02	1
10	mauricio	Not Set7	 2025-01-15     20:03:46	1
12	nath	Not Set1	 2025-01-15     22:57:54	1
17	lays	Not Set1	 2025-01-15     22:58:05	1
18	juliana	Not Set1	 2025-01-16     04:56:57	1
9	manuella meireles	Not Set1	 2025-01-16     07:03:07	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-16     07:56:42	1
14	Rosangela Fagundes	Not Set1	 2025-01-16     07:58:21	1
18	juliana	Not Set1	 2025-01-16     08:27:54	1
18	juliana	Not Set1	 2025-01-16     09:27:06	1
14	Rosangela Fagundes	Not Set1	 2025-01-16     09:52:16	1
13	barbara souza	Not Set1	 2025-01-16     10:15:56	1
14	Rosangela Fagundes	Not Set1	 2025-01-16     10:48:29	1
13	barbara souza	Not Set1	 2025-01-16     11:12:36	1
8	lurdes	Not Set1	 2025-01-16     11:40:26	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-16     11:50:40	1
10	mauricio	Not Set7	 2025-01-16     12:57:06	1
18	juliana	Not Set1	 2025-01-16     13:06:03	1
13	barbara souza	Not Set1	 2025-01-16     13:07:37	1
14	Rosangela Fagundes	Not Set1	 2025-01-16     14:22:58	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-16     14:28:01	1
12	nath	Not Set1	 2025-01-16     14:30:55	1
17	lays	Not Set1	 2025-01-16     14:35:20	1
8	lurdes	Not Set1	 2025-01-16     15:31:48	1
10	mauricio	Not Set7	 2025-01-16     15:42:59	1
8	lurdes	Not Set1	 2025-01-16     16:31:03	1
10	mauricio	Not Set7	 2025-01-16     16:40:24	1
12	nath	Not Set1	 2025-01-16     16:52:43	1
8	lurdes	Not Set1	 2025-01-16     17:23:09	1
9	manuella meireles	Not Set1	 2025-01-16     17:23:15	1
12	nath	Not Set1	 2025-01-16     17:52:57	1
17	lays	Not Set1	 2025-01-16     20:05:30	1
10	mauricio	Not Set7	 2025-01-16     20:09:43	1
17	lays	Not Set1	 2025-01-16     21:05:00	1
12	nath	Not Set1	 2025-01-16     22:55:56	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-16     22:56:56	1
17	lays	Not Set1	 2025-01-16     23:00:08	1
18	juliana	Not Set1	 2025-01-17     04:45:48	1
13	barbara souza	Not Set1	 2025-01-17     04:45:57	1
14	Rosangela Fagundes	Not Set1	 2025-01-17     06:06:12	1
8	lurdes	Not Set1	 2025-01-17     08:03:23	1
9	manuella meireles	Not Set1	 2025-01-17     08:03:28	1
13	barbara souza	Not Set1	 2025-01-17     08:31:28	1
13	barbara souza	Not Set1	 2025-01-17     09:29:29	1
18	juliana	Not Set1	 2025-01-17     09:42:10	1
14	Rosangela Fagundes	Not Set1	 2025-01-17     09:59:29	1
18	juliana	Not Set1	 2025-01-17     10:54:08	1
14	Rosangela Fagundes	Not Set1	 2025-01-17     10:55:27	1
10	mauricio	Not Set7	 2025-01-17     12:56:47	1
18	juliana	Not Set1	 2025-01-17     13:11:22	1
8	lurdes	Not Set1	 2025-01-17     13:24:07	1
9	manuella meireles	Not Set1	 2025-01-17     14:03:07	1
14	Rosangela Fagundes	Not Set1	 2025-01-17     14:17:32	1
8	lurdes	Not Set1	 2025-01-17     14:23:50	1
12	nath	Not Set1	 2025-01-17     14:25:52	1
17	lays	Not Set1	 2025-01-17     14:28:18	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-17     14:34:07	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-17     16:29:26	1
12	nath	Not Set1	 2025-01-17     17:05:15	1
10	mauricio	Not Set7	 2025-01-17     17:08:22	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-17     17:29:02	1
10	mauricio	Not Set7	 2025-01-17     17:36:25	1
9	manuella meireles	Not Set1	 2025-01-17     17:38:20	1
8	lurdes	Not Set1	 2025-01-17     17:38:30	1
12	nath	Not Set1	 2025-01-17     18:11:47	1
17	lays	Not Set1	 2025-01-17     19:22:25	1
17	lays	Not Set1	 2025-01-17     20:22:52	1
10	mauricio	Not Set7	 2025-01-17     21:20:00	1
12	nath	Not Set1	 2025-01-17     22:59:01	1
17	lays	Not Set1	 2025-01-17     22:59:04	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-17     22:59:17	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-18     07:56:14	1
12	nath	Not Set1	 2025-01-18     07:56:58	1
17	lays	Not Set1	 2025-01-18     09:36:19	1
8	lurdes	Not Set1	 2025-01-18     09:39:02	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-18     11:59:38	1
12	nath	Not Set1	 2025-01-18     12:21:01	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-18     13:07:28	1
8	lurdes	Not Set1	 2025-01-18     13:16:00	1
12	nath	Not Set1	 2025-01-18     13:31:43	1
17	lays	Not Set1	 2025-01-18     14:00:56	1
8	lurdes	Not Set1	 2025-01-18     14:15:04	1
17	lays	Not Set1	 2025-01-18     15:02:40	1
12	nath	Not Set1	 2025-01-18     15:28:09	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-18     15:28:22	1
8	lurdes	Not Set1	 2025-01-18     16:57:22	1
9	manuella meireles	Not Set1	 2025-01-19     07:52:38	1
14	Rosangela Fagundes	Not Set1	 2025-01-19     08:01:15	1
14	Rosangela Fagundes	Not Set1	 2025-01-19     10:12:59	1
14	Rosangela Fagundes	Not Set1	 2025-01-19     11:11:30	1
14	Rosangela Fagundes	Not Set1	 2025-01-19     13:59:04	1
13	barbara souza	Not Set1	 2025-01-20     04:52:53	1
18	juliana	Not Set1	 2025-01-20     05:21:21	1
14	Rosangela Fagundes	Not Set1	 2025-01-20     06:08:29	1
18	juliana	Not Set1	 2025-01-20     06:58:47	1
14	Rosangela Fagundes	Not Set1	 2025-01-20     09:59:17	1
9	manuella meireles	Not Set1	 2025-01-20     10:26:06	1
8	lurdes	Not Set1	 2025-01-20     10:30:58	1
14	Rosangela Fagundes	Not Set1	 2025-01-20     10:40:28	1
10	mauricio	Not Set7	 2025-01-20     12:38:26	1
12	nath	Not Set1	 2025-01-20     12:45:38	1
8	lurdes	Not Set1	 2025-01-20     12:59:16	1
8	lurdes	Not Set1	 2025-01-20     13:59:59	1
12	nath	Not Set1	 2025-01-20     14:05:09	1
17	lays	Not Set1	 2025-01-20     14:30:19	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-20     14:41:43	1
12	nath	Not Set1	 2025-01-20     15:05:29	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-20     16:37:49	1
10	mauricio	Not Set7	 2025-01-20     17:35:13	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-20     17:36:03	1
10	mauricio	Not Set7	 2025-01-20     18:14:20	1
8	lurdes	Not Set1	 2025-01-20     18:36:55	1
17	lays	Not Set1	 2025-01-20     20:28:29	1
10	mauricio	Not Set7	 2025-01-20     21:21:15	1
17	lays	Not Set1	 2025-01-20     21:27:55	1
17	lays	Not Set1	 2025-01-20     22:54:59	1
12	nath	Not Set1	 2025-01-20     22:55:07	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-20     22:55:10	1
18	juliana	Not Set1	 2025-01-21     04:44:12	1
14	Rosangela Fagundes	Not Set1	 2025-01-21     06:00:00	1
9	manuella meireles	Not Set1	 2025-01-21     08:29:05	1
18	juliana	Not Set1	 2025-01-21     08:46:18	1
18	juliana	Not Set1	 2025-01-21     09:46:24	1
14	Rosangela Fagundes	Not Set1	 2025-01-21     10:10:18	1
8	lurdes	Not Set1	 2025-01-21     10:55:34	1
10	mauricio	Not Set7	 2025-01-21     12:42:19	1
18	juliana	Not Set1	 2025-01-21     13:05:30	1
9	manuella meireles	Not Set1	 2025-01-21     13:20:23	1
12	nath	Not Set1	 2025-01-21     14:11:18	1
17	lays	Not Set1	 2025-01-21     14:25:46	1
9	manuella meireles	Not Set1	 2025-01-21     14:28:42	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-21     14:43:11	1
10	mauricio	Not Set7	 2025-01-21     16:36:12	1
8	lurdes	Not Set1	 2025-01-21     16:36:15	1
10	mauricio	Not Set7	 2025-01-21     17:02:16	1
12	nath	Not Set1	 2025-01-21     17:06:11	1
8	lurdes	Not Set1	 2025-01-21     17:36:05	1
12	nath	Not Set1	 2025-01-21     17:39:33	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-21     17:48:12	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-21     18:39:47	1
17	lays	Not Set1	 2025-01-21     19:59:41	1
8	lurdes	Not Set1	 2025-01-21     20:03:47	1
17	lays	Not Set1	 2025-01-21     20:57:59	1
10	mauricio	Not Set7	 2025-01-21     21:25:14	1
12	nath	Not Set1	 2025-01-21     22:54:35	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-21     22:54:38	1
17	lays	Not Set1	 2025-01-21     22:55:02	1
18	juliana	Not Set1	 2025-01-22     04:51:25	1
14	Rosangela Fagundes	Not Set1	 2025-01-22     06:07:42	1
9	manuella meireles	Not Set1	 2025-01-22     08:09:31	1
18	juliana	Not Set1	 2025-01-22     09:43:31	1
14	Rosangela Fagundes	Not Set1	 2025-01-22     10:32:56	1
18	juliana	Not Set1	 2025-01-22     10:43:08	1
8	lurdes	Not Set1	 2025-01-22     11:15:02	1
14	Rosangela Fagundes	Not Set1	 2025-01-22     11:27:03	1
10	mauricio	Not Set7	 2025-01-22     12:52:33	1
18	juliana	Not Set1	 2025-01-22     13:05:23	1
14	Rosangela Fagundes	Not Set1	 2025-01-22     14:15:42	1
12	nath	Not Set1	 2025-01-22     14:31:59	1
17	lays	Not Set1	 2025-01-22     14:32:32	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-22     14:32:39	1
10	mauricio	Not Set7	 2025-01-22     16:01:56	1
8	lurdes	Not Set1	 2025-01-22     16:31:15	1
10	mauricio	Not Set7	 2025-01-22     17:00:50	1
12	nath	Not Set1	 2025-01-22     17:09:01	1
8	lurdes	Not Set1	 2025-01-22     17:30:39	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-22     17:35:35	1
9	manuella meireles	Not Set1	 2025-01-22     17:55:53	1
12	nath	Not Set1	 2025-01-22     18:04:14	1
8	lurdes	Not Set1	 2025-01-22     18:39:41	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-22     18:44:38	1
10	mauricio	Not Set7	 2025-01-22     19:06:53	1
17	lays	Not Set1	 2025-01-22     19:45:05	1
17	lays	Not Set1	 2025-01-22     20:44:12	1
17	lays	Not Set1	 2025-01-22     22:56:18	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-22     22:56:27	1
12	nath	Not Set1	 2025-01-22     22:56:36	1
18	juliana	Not Set1	 2025-01-23     05:02:14	1
14	Rosangela Fagundes	Not Set1	 2025-01-23     06:10:30	1
18	juliana	Not Set1	 2025-01-23     09:33:18	1
14	Rosangela Fagundes	Not Set1	 2025-01-23     10:15:18	1
18	juliana	Not Set1	 2025-01-23     10:33:24	1
14	Rosangela Fagundes	Not Set1	 2025-01-23     10:56:13	1
8	lurdes	Not Set1	 2025-01-23     11:13:38	1
9	manuella meireles	Not Set1	 2025-01-23     12:24:00	1
10	mauricio	Not Set7	 2025-01-23     13:01:14	1
18	juliana	Not Set1	 2025-01-23     13:10:08	1
9	manuella meireles	Not Set1	 2025-01-23     13:21:09	1
12	nath	Not Set1	 2025-01-23     14:21:30	1
17	lays	Not Set1	 2025-01-23     14:31:24	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-23     14:36:48	1
8	lurdes	Not Set1	 2025-01-23     15:49:25	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-23     16:46:22	1
8	lurdes	Not Set1	 2025-01-23     16:48:43	1
10	mauricio	Not Set7	 2025-01-23     16:50:12	1
12	nath	Not Set1	 2025-01-23     17:01:13	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-23     17:44:46	1
12	nath	Not Set1	 2025-01-23     17:58:58	1
10	mauricio	Not Set7	 2025-01-23     17:59:47	1
17	lays	Not Set1	 2025-01-23     20:00:03	1
17	lays	Not Set1	 2025-01-23     20:58:46	1
8	lurdes	Not Set1	 2025-01-23     21:19:29	1
10	mauricio	Not Set7	 2025-01-23     21:20:01	1
12	nath	Not Set1	 2025-01-23     22:10:47	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-23     22:50:18	1
17	lays	Not Set1	 2025-01-23     23:01:09	1
18	juliana	Not Set1	 2025-01-24     04:34:10	1
14	Rosangela Fagundes	Not Set1	 2025-01-24     06:24:21	1
18	juliana	Not Set1	 2025-01-24     09:52:09	1
14	Rosangela Fagundes	Not Set1	 2025-01-24     10:12:40	1
18	juliana	Not Set1	 2025-01-24     10:55:00	1
14	Rosangela Fagundes	Not Set1	 2025-01-24     11:02:27	1
8	lurdes	Not Set1	 2025-01-24     11:34:21	1
9	manuella meireles	Not Set1	 2025-01-24     12:44:57	1
10	mauricio	Not Set7	 2025-01-24     12:53:28	1
18	juliana	Not Set1	 2025-01-24     13:07:03	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-24     13:15:24	1
17	lays	Not Set1	 2025-01-24     13:36:18	1
14	Rosangela Fagundes	Not Set1	 2025-01-24     14:20:29	1
12	nath	Not Set1	 2025-01-24     14:29:35	1
8	lurdes	Not Set1	 2025-01-24     15:31:24	1
10	mauricio	Not Set7	 2025-01-24     15:55:24	1
10	mauricio	Not Set7	 2025-01-24     16:18:45	1
8	lurdes	Not Set1	 2025-01-24     16:26:16	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-24     16:30:28	1
12	nath	Not Set1	 2025-01-24     17:11:29	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-24     17:18:34	1
12	nath	Not Set1	 2025-01-24     18:05:36	1
17	lays	Not Set1	 2025-01-24     20:24:16	1
8	lurdes	Not Set1	 2025-01-24     20:57:46	1
10	mauricio	Not Set7	 2025-01-24     21:20:29	1
17	lays	Not Set1	 2025-01-24     21:28:32	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-24     22:48:01	1
12	nath	Not Set1	 2025-01-24     22:55:31	1
17	lays	Not Set1	 2025-01-24     22:55:35	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-25     07:58:16	1
8	lurdes	Not Set1	 2025-01-25     07:58:34	1
17	lays	Not Set1	 2025-01-25     07:59:47	1
18	juliana	Not Set1	 2025-01-25     10:20:00	1
9	manuella meireles	Not Set1	 2025-01-25     11:13:04	1
9	manuella meireles	Not Set1	 2025-01-25     12:10:11	1
8	lurdes	Not Set1	 2025-01-25     12:10:17	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-25     12:10:22	1
17	lays	Not Set1	 2025-01-25     12:10:35	1
18	juliana	Not Set1	 2025-01-25     12:10:40	1
17	lays	Not Set1	 2025-01-25     13:09:11	1
18	juliana	Not Set1	 2025-01-25     13:09:14	1
8	lurdes	Not Set1	 2025-01-25     13:14:00	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-25     13:15:06	1
17	lays	Not Set1	 2025-01-25     16:42:51	1
18	juliana	Not Set1	 2025-01-25     17:02:01	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-25     18:28:16	1
8	lurdes	Not Set1	 2025-01-25     18:34:58	1
9	manuella meireles	Not Set1	 2025-01-25     20:00:44	1
10	mauricio	Not Set7	 2025-01-26     08:13:36	1
8	lurdes	Not Set1	 2025-01-26     08:13:51	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-26     08:13:58	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-26     12:00:25	1
8	lurdes	Not Set1	 2025-01-26     12:02:20	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-26     13:02:32	1
8	lurdes	Not Set1	 2025-01-26     13:05:08	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-26     19:18:16	1
8	lurdes	Not Set1	 2025-01-26     19:18:52	1
10	mauricio	Not Set7	 2025-01-26     20:00:51	1
18	juliana	Not Set1	 2025-01-27     04:48:59	1
14	Rosangela Fagundes	Not Set1	 2025-01-27     06:04:25	1
18	juliana	Not Set1	 2025-01-27     09:56:33	1
18	juliana	Not Set1	 2025-01-27     10:24:01	1
14	Rosangela Fagundes	Not Set1	 2025-01-27     10:24:35	1
14	Rosangela Fagundes	Not Set1	 2025-01-27     11:14:56	1
18	juliana	Not Set1	 2025-01-27     12:41:54	1
10	mauricio	Not Set7	 2025-01-27     12:49:18	1
14	Rosangela Fagundes	Not Set1	 2025-01-27     14:18:45	1
12	nath	Not Set1	 2025-01-27     14:22:45	1
17	lays	Not Set1	 2025-01-27     14:33:18	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-27     14:38:45	1
8	lurdes	Not Set1	 2025-01-27     14:48:42	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-27     16:57:31	1
10	mauricio	Not Set7	 2025-01-27     17:04:22	1
10	mauricio	Not Set7	 2025-01-27     17:58:40	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-27     18:09:11	1
8	lurdes	Not Set1	 2025-01-27     18:30:17	1
12	nath	Not Set1	 2025-01-27     18:54:41	1
8	lurdes	Not Set1	 2025-01-27     19:30:32	1
12	nath	Not Set1	 2025-01-27     19:56:05	1
17	lays	Not Set1	 2025-01-27     20:21:28	1
10	mauricio	Not Set7	 2025-01-27     20:35:35	1
17	lays	Not Set1	 2025-01-27     21:21:38	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-27     22:53:02	1
17	lays	Not Set1	 2025-01-27     22:53:13	1
12	nath	Not Set1	 2025-01-27     22:56:41	1
8	lurdes	Not Set1	 2025-01-27     22:58:47	1
18	juliana	Not Set1	 2025-01-28     04:47:41	1
14	Rosangela Fagundes	Not Set1	 2025-01-28     06:08:41	1
19	claudete	Not Set1	 2025-01-28     07:48:53	1
18	juliana	Not Set1	 2025-01-28     08:56:33	1
18	juliana	Not Set1	 2025-01-28     09:56:28	1
14	Rosangela Fagundes	Not Set1	 2025-01-28     10:31:12	1
14	Rosangela Fagundes	Not Set1	 2025-01-28     10:50:07	1
8	lurdes	Not Set1	 2025-01-28     11:20:29	1
9	manuella meireles	Not Set1	 2025-01-28     12:16:08	1
19	claudete	Not Set1	 2025-01-28     12:16:30	1
10	mauricio	Not Set7	 2025-01-28     13:00:16	1
19	claudete	Not Set1	 2025-01-28     13:01:00	1
18	juliana	Not Set1	 2025-01-28     13:10:50	1
9	manuella meireles	Not Set1	 2025-01-28     13:40:56	1
14	Rosangela Fagundes	Not Set1	 2025-01-28     14:18:04	1
12	nath	Not Set1	 2025-01-28     14:27:28	1
17	lays	Not Set1	 2025-01-28     14:28:50	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-28     14:33:25	1
19	claudete	Not Set1	 2025-01-28     16:01:43	1
10	mauricio	Not Set7	 2025-01-28     16:32:26	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-28     16:46:51	1
9	manuella meireles	Not Set1	 2025-01-28     17:27:51	1
10	mauricio	Not Set7	 2025-01-28     17:31:46	1
12	nath	Not Set1	 2025-01-28     17:34:28	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-28     17:47:54	1
8	lurdes	Not Set1	 2025-01-28     17:48:48	1
12	nath	Not Set1	 2025-01-28     18:36:17	1
8	lurdes	Not Set1	 2025-01-28     18:49:43	1
8	lurdes	Not Set1	 2025-01-28     20:03:19	1
17	lays	Not Set1	 2025-01-28     20:06:15	1
17	lays	Not Set1	 2025-01-28     21:05:32	1
10	mauricio	Not Set7	 2025-01-28     21:19:45	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-28     22:53:14	1
12	nath	Not Set1	 2025-01-28     22:56:20	1
17	lays	Not Set1	 2025-01-28     23:00:01	1
18	juliana	Not Set1	 2025-01-29     05:13:11	1
14	Rosangela Fagundes	Not Set1	 2025-01-29     06:05:21	1
19	claudete	Not Set1	 2025-01-29     07:32:35	1
9	manuella meireles	Not Set1	 2025-01-29     08:18:23	1
18	juliana	Not Set1	 2025-01-29     08:33:40	1
18	juliana	Not Set1	 2025-01-29     09:26:28	1
14	Rosangela Fagundes	Not Set1	 2025-01-29     10:00:04	1
14	Rosangela Fagundes	Not Set1	 2025-01-29     10:38:07	1
8	lurdes	Not Set1	 2025-01-29     11:34:22	1
19	claudete	Not Set1	 2025-01-29     12:25:41	1
10	mauricio	Not Set7	 2025-01-29     12:51:53	1
19	claudete	Not Set1	 2025-01-29     13:04:15	1
18	juliana	Not Set1	 2025-01-29     13:07:21	1
9	manuella meireles	Not Set1	 2025-01-29     13:42:52	1
14	Rosangela Fagundes	Not Set1	 2025-01-29     14:16:22	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-29     14:32:53	1
12	nath	Not Set1	 2025-01-29     14:33:47	1
17	lays	Not Set1	 2025-01-29     14:42:30	1
9	manuella meireles	Not Set1	 2025-01-29     15:18:15	1
10	mauricio	Not Set7	 2025-01-29     15:59:27	1
19	claudete	Not Set1	 2025-01-29     16:01:15	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-29     16:07:27	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-29     16:56:16	1
10	mauricio	Not Set7	 2025-01-29     16:59:39	1
12	nath	Not Set1	 2025-01-29     17:00:10	1
8	lurdes	Not Set1	 2025-01-29     17:20:53	1
12	nath	Not Set1	 2025-01-29     17:57:56	1
8	lurdes	Not Set1	 2025-01-29     18:20:44	1
17	lays	Not Set1	 2025-01-29     20:08:35	1
8	lurdes	Not Set1	 2025-01-29     20:51:31	1
17	lays	Not Set1	 2025-01-29     21:07:36	1
10	mauricio	Not Set7	 2025-01-29     21:22:24	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-29     22:47:47	1
12	nath	Not Set1	 2025-01-29     22:57:30	1
17	lays	Not Set1	 2025-01-29     22:57:33	1
14	Rosangela Fagundes	Not Set1	 2025-01-30     06:11:00	1
19	claudete	Not Set1	 2025-01-30     08:00:06	1
9	manuella meireles	Not Set1	 2025-01-30     08:06:32	1
14	Rosangela Fagundes	Not Set1	 2025-01-30     09:54:49	1
14	Rosangela Fagundes	Not Set1	 2025-01-30     10:28:31	1
8	lurdes	Not Set1	 2025-01-30     11:38:16	1
10	mauricio	Not Set7	 2025-01-30     12:58:02	1
9	manuella meireles	Not Set1	 2025-01-30     14:12:23	1
14	Rosangela Fagundes	Not Set1	 2025-01-30     14:21:30	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-30     14:34:43	1
12	nath	Not Set1	 2025-01-30     14:35:52	1
17	lays	Not Set1	 2025-01-30     14:35:57	1
10	mauricio	Not Set7	 2025-01-30     16:01:31	1
8	lurdes	Not Set1	 2025-01-30     16:01:34	1
10	mauricio	Not Set7	 2025-01-30     16:51:20	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-30     17:01:17	1
8	lurdes	Not Set1	 2025-01-30     17:01:26	1
12	nath	Not Set1	 2025-01-30     17:26:22	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-30     18:02:32	1
12	nath	Not Set1	 2025-01-30     18:42:25	1
17	lays	Not Set1	 2025-01-30     19:59:29	1
8	lurdes	Not Set1	 2025-01-30     20:31:17	1
17	lays	Not Set1	 2025-01-30     21:06:03	1
10	mauricio	Not Set7	 2025-01-30     21:20:45	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-30     22:51:23	1
12	nath	Not Set1	 2025-01-30     22:56:14	1
17	lays	Not Set1	 2025-01-30     22:57:45	1
14	Rosangela Fagundes	Not Set1	 2025-01-31     06:07:52	1
9	manuella meireles	Not Set1	 2025-01-31     08:18:08	1
8	lurdes	Not Set1	 2025-01-31     11:25:50	1
14	Rosangela Fagundes	Not Set1	 2025-01-31     12:28:02	1
10	mauricio	Not Set7	 2025-01-31     13:01:01	1
9	manuella meireles	Not Set1	 2025-01-31     13:04:29	1
14	Rosangela Fagundes	Not Set1	 2025-01-31     13:59:05	1
12	nath	Not Set1	 2025-01-31     14:12:30	1
14	Rosangela Fagundes	Not Set1	 2025-01-31     14:21:59	1
17	lays	Not Set1	 2025-01-31     14:32:52	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-31     14:40:16	1
10	mauricio	Not Set7	 2025-01-31     16:15:30	1
8	lurdes	Not Set1	 2025-01-31     16:16:01	1
10	mauricio	Not Set7	 2025-01-31     17:10:25	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-31     17:15:58	1
12	nath	Not Set1	 2025-01-31     17:16:37	1
8	lurdes	Not Set1	 2025-01-31     17:16:53	1
	`
}
const pontosUltrasMy = ()=>{
	return `10	mauricio	Not Set7	 2025-01-02     13:00:00	1
10	mauricio	Not Set7	 2025-01-02     16:00:00	1
10	mauricio	Not Set7	 2025-01-02     17:00:00	1
10	mauricio	Not Set7	 2025-01-02     21:20:00	1
10	mauricio	Not Set7	 2025-01-03     13:00:00	1
10	mauricio	Not Set7	 2025-01-03     16:00:00	1
10	mauricio	Not Set7	 2025-01-03     17:00:00	1
10	mauricio	Not Set7	 2025-01-03     21:20:00	1
10	mauricio	Not Set7	 2025-01-04     13:00:00	1
10	mauricio	Not Set7	 2025-01-04     16:00:00	1
10	mauricio	Not Set7	 2025-01-04     17:00:00	1
10	mauricio	Not Set7	 2025-01-04     21:20:00	1
`;
};
const pontosUltras = ()=>{
	return `10	mauricio	Not Set7	 2025-01-02     13:00:00	1
10	mauricio	Not Set7	 2025-01-02     16:00:00	1
10	mauricio	Not Set7	 2025-01-02     17:00:00	1
10	mauricio	Not Set7	 2025-01-02     21:20:00	1
10	mauricio	Not Set7	 2025-01-03     13:00:00	1
10	mauricio	Not Set7	 2025-01-03     16:00:00	1
10	mauricio	Not Set7	 2025-01-03     17:00:00	1
10	mauricio	Not Set7	 2025-01-03     21:20:00	1
10	mauricio	Not Set7	 2025-01-04     13:00:00	1
10	mauricio	Not Set7	 2025-01-04     16:00:00	1
10	mauricio	Not Set7	 2025-01-04     21:20:00	1
`;
};
const pontoUltras = ()=>{
	
	return `10	mauricio	Not Set7	 2025-01-02     12:43:08	1`;
};
let	con = prompt(`Selecione um funcionário pelo ID:
\nMeu S/ um intervalo - 1
\nTodos - 2
\nMeu Um - 3
\nMeu C/ intervalo - 4
\nMeu S/ dois intervalos - 5
`, 5);
if (con == 1) {
	listasText.value = pontosUltras();
} else if (con == 2) {
	listasText.value = pontoUltra();
} else if (con == 3) {
	listasText.value = pontoUltras();
} else if (con == 4) {
	listasText.value = pontosUltrasMy();
} else if (con == 5) {
	listasText.value = `10	mauricio	Not Set7	 2025-01-02     13:00:00	1
10	mauricio	Not Set7	 2025-01-02     17:00:00	1
10	mauricio	Not Set7	 2025-01-02     21:20:00	1
10	mauricio	Not Set7	 2025-01-03     13:00:00	1
10	mauricio	Not Set7	 2025-01-03     16:00:00	1
10	mauricio	Not Set7	 2025-01-03     17:00:00	1
10	mauricio	Not Set7	 2025-01-03     21:20:00	1
10	mauricio	Not Set7	 2025-01-04     13:00:00	1
10	mauricio	Not Set7	 2025-01-04     16:00:00	1
10	mauricio	Not Set7	 2025-01-04     21:20:00	1
10	mauricio	Not Set7	 2025-01-05     13:00:00	1
10	mauricio	Not Set7	 2025-01-05     16:00:00	1
10	mauricio	Not Set7	 2025-01-05     17:00:00	1
10	mauricio	Not Set7	 2025-01-05     21:20:00	1
`;
}
else {
	alert("INVÁLIDO");
	return
}

});

document.getElementById("btn_ponto").addEventListener("click", function () {
    let textarea = document.getElementById("listasText").value.trim();
    let linhas = textarea.split("\n");
        
    let funcionarios = {};
        
    linhas.forEach(linha => {
        
        let partes = linha.split("\t");
        if (partes.length < 5) return;

        let id = parseInt(partes[0].trim());
        let nome = partes[1].trim();
        let setor = partes[2].trim();
        let dataMatch = partes[3].match(/\d{4}-\d{2}-\d{2}/);
        let horaMatch = partes[3].match(/\d{2}:\d{2}:\d{2}/);
        let data = dataMatch ? dataMatch[0] : null;
        let hora = horaMatch ? horaMatch[0] : null;
        let maquina = parseInt(partes[4].trim());
        if (!funcionarios[id]) {
            funcionarios[id] = { id, nome, setor, registros: [] };
        }

        if (data && hora) {
            funcionarios[id].registros.push({ data, hora, maquina });
        }
    });

    let resultado = Object.values(funcionarios);
    selecionarFuncionarioECalcularHoras(resultado);
});

function selecionarFuncionarioECalcularHoras(funcionarios) {
    let nomesFuncionarios = funcionarios.map(f => `${f.id} - ${f.nome}`).join("\n");
    let nomeFuncionario = funcionarios.map(f => `${f.id}`).join("\n");
    
    let idSelecionado;
    let mesSelecionado;
    if (funcionarios.length < 2) {
    const d = new Date();
    idSelecionado = nomeFuncionario;
    	 
    	let func = funcionarios.find(f => f.id == idSelecionado);
    	mesSelecionado = (d.getMonth()+1);
    	
    } else if (funcionarios.length > 1) {
    idSelecionado = prompt(`Selecione um funcionário pelo ID:\n${nomesFuncionarios}`, 10);
    }
    
    if (!idSelecionado) return;

    let funcionario = funcionarios.find(f => f.id == idSelecionado.trim());

    if (!funcionario) {
        alert("Funcionário não encontrado!");
        return;
    }

    mesSelecionado = prompt("Digite o mês desejado (formato MM):", `01`);

    if (!mesSelecionado || !/^\d{2}$/.test(mesSelecionado)) {
        alert("Mês inválido!");
        return;
    }

    let resultado = calcularHorasTrabalhadas(funcionario, mesSelecionado);
    // console.log(`Horas trabalhadas por ${funcionario.nome} no mês ${mesSelecionado}: ${resultado.horasTrabalhadas}`);
    // console.log(`Horas de intervalo por ${funcionario.nome} no mês ${mesSelecionado}: ${resultado.horasIntervalo}`);
    // console.log(resultado.mensagemSemIntervalo);
    viewDomPonto(funcionario.nome, mesSelecionado, resultado.horasTrabalhadas, resultado.mensagemSemIntervalo);
    // console.log(resultado);
}


function viewDomPonto(nome, mesSelecionado, horasTrabalhadas, mensagemSemIntervalo) {
const boxePonto = document.querySelector("#viewListaCopia");
let mau = mensagemSemIntervalo.match(/\d{4}-\d{2}-\d{2}/g);
boxePonto.innerHTML = `
<div class="boxes">
				<h3>
					Hora Funcionário
				</h3>
				<p>
				Horas trabalhadas por ${nome} no mês ${mesSelecionado}: ${horasTrabalhadas}
				</p>
				<p>				${mensagemSemIntervalo}
				</p>
			</div>
`;


	
}


function calcularHorasTrabalhadas(funcionario, mes) {
    let registros = funcionario.registros.filter(reg => reg.data.split("-")[1] === mes).sort((a, b) => a.data.localeCompare(b.data) || a.hora.localeCompare(b.hora));

    if (registros.length < 2) return { horasTrabalhadas: "Dados insuficientes", horasIntervalo: "N/A", mensagemSemIntervalo: "" };

    let totalMinutosTrabalho = 0;
    let totalMinutosIntervalo = 0;
    let diasSemIntervalo = [];
    let registrosPorDia = {};

    // Agrupa os registros por data
    registros.forEach(reg => {
        if (!registrosPorDia[reg.data]) {
            registrosPorDia[reg.data] = [];
        }
        registrosPorDia[reg.data].push(reg.hora);
    });

    for (let data in registrosPorDia) {
        let pontos = registrosPorDia[data];
       
        pontos.sort();
if (pontos.length < 4) { 
    // Se houver menos de 4 registros, considerar primeiro e último como horas trabalhadas
    totalMinutosTrabalho += diferencaEmMinutos(pontos[0], pontos[pontos.length - 1]);
    diasSemIntervalo.push(data);
    continue;
}

        // if (pontos.length < 2) continue; // Se houver apenas dois registro no dia, ignora

        let minutosDia = 0;
        let minutosIntervalo = 0;
        for (let i = 0; i < pontos.length - 1; i += 2) {
            minutosDia += diferencaEmMinutos(pontos[i], pontos[i + 1]);
        }

        if (pontos.length > 3) {
            for (let i = 1; i < pontos.length - 1; i += 2) {
        minutosIntervalo += diferencaEmMinutos(pontos[i], pontos[i + 1]);
            }
        } else {
            diasSemIntervalo.push(data);
        }

        totalMinutosTrabalho += minutosDia;
        totalMinutosIntervalo += minutosIntervalo;
    }

    let horasTrabalhoFormatadas = formatarHoras(totalMinutosTrabalho);
    let horasIntervaloFormatadas = formatarHoras(totalMinutosIntervalo);

    
    
  const semIntervalo = diasSemIntervalo.map(item => `${item.split("-").reverse().join("/")}`).join(", ");
   
    if (diasSemIntervalo.length == 1) {
    	 //mensagemSemIntervalo = `O funcionário não teve intervalo no dia: ${diasSemIntervalo.map(item => `${item.split("-").reverse().join("/")}`).join(", ")}`;
    	 mensagemSemIntervalo = `O funcionário não teve intervalo no dia: ${semIntervalo}`;
    	
    
    }
    // if (diasSemIntervalo.length > 1) {
    	
    // 	 mensagemSemIntervalo = `O funcionário não teve intervalo nos dias:
    // 	<br>
    // 	 ${diasSemIntervalo.map(item => `${item.split("-").reverse().join("/")}`).join(", ")}
    // 	 `;
    // }
    if (diasSemIntervalo.length > 1) {
    	
    	 mensagemSemIntervalo = `O funcionário não teve intervalo nos dias:
    	<br>
    	 ${semIntervalo}
    	 `;
    }
    if (diasSemIntervalo.length < 1) {
    	mensagemSemIntervalo = "Todos os dias possuem intervalo.";
    }
        

    return { horasTrabalhadas: horasTrabalhoFormatadas, horasIntervalo: horasIntervaloFormatadas, mensagemSemIntervalo };
}

function diferencaEmMinutos(hora1, hora2) {
    let [h1, m1, s1] = hora1.split(":").map(Number);
    let [h2, m2, s2] = hora2.split(":").map(Number);

    let t1 = new Date(0, 0, 0, h1, m1, s1);
    let t2 = new Date(0, 0, 0, h2, m2, s2);

    return (t2 - t1) / 60000;
}

function formatarHoras(totalMinutos) {
    let horas = Math.floor(totalMinutos / 60);
    let minutos = totalMinutos % 60;
    return `${horas.toString().padStart(2, "0")}:${minutos.toString().padStart(2, "0")}`;
}


