<!DOCTYPE html>

<html lang="pt">

<head>

&nbsp;   <meta charset="UTF-8">

&nbsp;   <meta name="viewport" content="width=device-width, initial-scale=1.0">

&nbsp;   <title>Análise de Dados de Altura e Gênero - TED 1</title>

&nbsp;   <!-- Carrega o Tailwind CSS CDN para estilização -->

&nbsp;   <script src="https://cdn.tailwindcss.com"></script>

&nbsp;   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900\&display=swap" rel="stylesheet">

&nbsp;   <style>

&nbsp;       body {

&nbsp;           font-family: 'Inter', sans-serif;

&nbsp;           background-color: #f7f9fb;

&nbsp;       }

&nbsp;       .shadow-custom {

&nbsp;           box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

&nbsp;       }

&nbsp;   </style>

</head>

<body class="p-4 sm:p-8">



&nbsp;   <div class="max-w-4xl mx-auto">

&nbsp;       

&nbsp;       <!-- Título Principal -->

&nbsp;       <header class="text-center mb-8">

&nbsp;           <h1 class="text-3xl sm:text-4xl font-extrabold text-blue-700">ANALISE DE DADOS DE ALTURA E GENERO</h1>

&nbsp;           <p class="text-sm text-gray-500 mt-1">Disciplina: Tecnologias para Front-End com Logica Imperativa | TED 1 - Atividade Individual</p>

&nbsp;           <div class="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>

&nbsp;       </header>



&nbsp;       <!-- Container de Resultados -->

&nbsp;       <div id="resultados-container" class="space-y-8">

&nbsp;           <!-- Os resultados serão injetados aqui pelo JavaScript -->

&nbsp;       </div>



&nbsp;   </div>



&nbsp;   <script>

&nbsp;       // Variáveis globais para os dados, conforme o script Python

&nbsp;       const NUM\_PESSOAS = 15;



&nbsp;       // Dados de 15 pessoas (nome, altura em metros, genero)

&nbsp;       const pessoas = \[

&nbsp;           {"nome": "Alice", "altura": 1.65, "genero": "Feminino"},

&nbsp;           {"nome": "Bruno", "altura": 1.80, "genero": "Masculino"},

&nbsp;           {"nome": "Carla", "altura": 1.70, "genero": "Feminino"},

&nbsp;           {"nome": "Daniel", "altura": 1.75, "genero": "Masculino"},

&nbsp;           {"nome": "Eduarda", "altura": 1.60, "genero": "Feminino"},

&nbsp;           {"nome": "Felipe", "altura": 1.85, "genero": "Masculino"},

&nbsp;           {"nome": "Gabriela", "altura": 1.68, "genero": "Feminino"},

&nbsp;           {"nome": "Henrique", "altura": 1.90, "genero": "Masculino"},

&nbsp;           {"nome": "Isabela", "altura": 1.62, "genero": "Feminino"},

&nbsp;           {"nome": "João", "altura": 1.78, "genero": "Masculino"},

&nbsp;           {"nome": "Karina", "altura": 1.72, "genero": "Feminino"},

&nbsp;           {"nome": "Lucas", "altura": 1.82, "genero": "Masculino"},

&nbsp;           {"nome": "Mariana", "altura": 1.66, "genero": "Feminino"},

&nbsp;           {"nome": "Nicolas", "altura": 1.88, "genero": "Masculino"},

&nbsp;           {"nome": "Olivia", "altura": 1.64, "genero": "Feminino"}

&nbsp;       ];



&nbsp;       /\*\*

&nbsp;        \* Realiza a análise dos dados de altura e gênero.

&nbsp;        \* @returns {Object} Contém todos os resultados da análise.

&nbsp;        \*/

&nbsp;       function analisarDados() {

&nbsp;           // 1. Obter lista de alturas e generos

&nbsp;           const alturas = pessoas.map(p => p.altura);

&nbsp;           const generos = pessoas.map(p => p.genero);



&nbsp;           // 2. Calcular maior e menor altura (Usando Math.min/max com spread operator)

&nbsp;           const maiorAltura = Math.max(...alturas);

&nbsp;           const menorAltura = Math.min(...alturas);



&nbsp;           // 3. Encontrar as pessoas com maior e menor altura (pode haver empate, pegamos a primeira)

&nbsp;           const pessoaMaiorAltura = pessoas.find(p => p.altura === maiorAltura);

&nbsp;           const pessoaMenorAltura = pessoas.find(p => p.altura === menorAltura);



&nbsp;           // 4. Filtrar alturas e calcular a média masculina

&nbsp;           const alturasMasculino = pessoas

&nbsp;               .filter(p => p.genero === 'Masculino')

&nbsp;               .map(p => p.altura);

&nbsp;           

&nbsp;           let mediaMasculino = 0;

&nbsp;           if (alturasMasculino.length > 0) {

&nbsp;               const somaMasculina = alturasMasculino.reduce((acc, curr) => acc + curr, 0);

&nbsp;               mediaMasculino = somaMasculina / alturasMasculino.length;

&nbsp;           }



&nbsp;           // 5. Contar o número de pessoas do gênero feminino

&nbsp;           const numeroFeminino = pessoas.filter(p => p.genero === 'Feminino').length;



&nbsp;           // 6. Calcular estatísticas adicionais

&nbsp;           const numMasculino = pessoas.length - numeroFeminino;

&nbsp;           const somaAlturasGeral = alturas.reduce((acc, curr) => acc + curr, 0);

&nbsp;           const mediaAlturaGeral = somaAlturasGeral / pessoas.length;



&nbsp;           // 7. Distribuição por faixa de altura

&nbsp;           const faixaBaixa = pessoas.filter(p => p.altura < 1.70);

&nbsp;           const faixaMedia = pessoas.filter(p => p.altura >= 1.70 \&\& p.altura < 1.80);

&nbsp;           const faixaAlta = pessoas.filter(p => p.altura >= 1.80);



&nbsp;           return {

&nbsp;               maiorAltura,

&nbsp;               menorAltura,

&nbsp;               pessoaMaiorAltura,

&nbsp;               pessoaMenorAltura,

&nbsp;               mediaMasculino,

&nbsp;               numeroFeminino,

&nbsp;               numMasculino,

&nbsp;               mediaAlturaGeral,

&nbsp;               faixaBaixa,

&nbsp;               faixaMedia,

&nbsp;               faixaAlta

&nbsp;           };

&nbsp;       }



&nbsp;       /\*\*

&nbsp;        \* Gera o HTML para exibir os dados e os resultados.

&nbsp;        \*/

&nbsp;       function exibirResultados() {

&nbsp;           const resultados = analisarDados();

&nbsp;           const container = document.getElementById('resultados-container');

&nbsp;           let htmlContent = '';



&nbsp;           // --- 1. Exibir Dados Coletados ---

&nbsp;           htmlContent += `

&nbsp;               <div class="bg-white p-6 rounded-xl shadow-custom border border-gray-100">

&nbsp;                   <h2 class="text-2xl font-semibold mb-4 text-blue-600 border-b pb-2">DADOS COLETADOS (${NUM\_PESSOAS} Pessoas)</h2>

&nbsp;                   <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">

&nbsp;           `;

&nbsp;           pessoas.forEach((pessoa, index) => {

&nbsp;               const corGenero = pessoa.genero === 'Feminino' ? 'text-pink-600' : 'text-sky-600';

&nbsp;               htmlContent += `

&nbsp;                   <div class="flex justify-between items-center text-gray-700 p-1 border-b border-gray-50 last:border-b-0">

&nbsp;                       <span class="font-medium">${index + 1}. ${pessoa.nome}</span>

&nbsp;                       <span class="${corGenero} font-mono text-sm">${pessoa.altura.toFixed(2)}m (${pessoa.genero\[0]})</span>

&nbsp;                   </div>

&nbsp;               `;

&nbsp;           });

&nbsp;           htmlContent += `

&nbsp;                   </div>

&nbsp;               </div>

&nbsp;           `;



&nbsp;           // --- 2. Resultados da Análise ---

&nbsp;           htmlContent += `

&nbsp;               <div class="bg-white p-6 rounded-xl shadow-custom border border-gray-100">

&nbsp;                   <h2 class="text-2xl font-semibold mb-4 text-green-600 border-b pb-2">RESULTADOS DA ANÁLISE PRINCIPAL</h2>

&nbsp;                   <div class="space-y-3 text-lg">

&nbsp;                       <p class="flex items-center">

&nbsp;                           <span class="text-xl mr-2 text-green-500 font-bold">→</span> 

&nbsp;                           <span class="font-medium text-gray-700">Maior altura:</span> 

&nbsp;                           <span class="ml-auto font-bold text-green-700">${resultados.maiorAltura.toFixed(2)}m (${resultados.pessoaMaiorAltura.nome})</span>

&nbsp;                       </p>

&nbsp;                       <p class="flex items-center">

&nbsp;                           <span class="text-xl mr-2 text-red-500 font-bold">→</span> 

&nbsp;                           <span class="font-medium text-gray-700">Menor altura:</span> 

&nbsp;                           <span class="ml-auto font-bold text-red-700">${resultados.menorAltura.toFixed(2)}m (${resultados.pessoaMenorAltura.nome})</span>

&nbsp;                       </p>

&nbsp;                       <p class="flex items-center">

&nbsp;                           <span class="text-xl mr-2 text-sky-500 font-bold">→</span> 

&nbsp;                           <span class="font-medium text-gray-700">Média de altura masculina:</span> 

&nbsp;                           <span class="ml-auto font-bold text-sky-700">${resultados.mediaMasculino.toFixed(2)}m</span>

&nbsp;                       </p>

&nbsp;                       <p class="flex items-center">

&nbsp;                           <span class="text-xl mr-2 text-pink-500 font-bold">→</span> 

&nbsp;                           <span class="font-medium text-gray-700">Número de pessoas do gênero feminino:</span> 

&nbsp;                           <span class="ml-auto font-bold text-pink-700">${resultados.numeroFeminino}</span>

&nbsp;                       </p>

&nbsp;                   </div>

&nbsp;               </div>

&nbsp;           `;



&nbsp;           // --- 3. Estatísticas Adicionais e Distribuição ---

&nbsp;           htmlContent += `

&nbsp;               <div class="bg-white p-6 rounded-xl shadow-custom border border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-8">

&nbsp;                   

&nbsp;                   <!-- Estatísticas Adicionais -->

&nbsp;                   <div>

&nbsp;                       <h3 class="text-xl font-semibold mb-4 text-purple-600 border-b pb-2">ESTATÍSTICAS ADICIONAIS</h3>

&nbsp;                       <ul class="space-y-2 text-gray-600">

&nbsp;                           <li class="flex justify-between items-center border-b border-gray-100 py-1">

&nbsp;                               <span class="font-medium">Total de pessoas analisadas:</span>

&nbsp;                               <span class="font-bold text-gray-800">${NUM\_PESSOAS}</span>

&nbsp;                           </li>

&nbsp;                           <li class="flex justify-between items-center border-b border-gray-100 py-1">

&nbsp;                               <span class="text-sky-600 font-medium">Contagem Masculino:</span>

&nbsp;                               <span class="font-bold text-sky-700">${resultados.numMasculino}</span>

&nbsp;                           </li>

&nbsp;                           <li class="flex justify-between items-center border-b border-gray-100 py-1">

&nbsp;                               <span class="text-pink-600 font-medium">Contagem Feminino:</span>

&nbsp;                               <span class="font-bold text-pink-700">${resultados.numeroFeminino}</span>

&nbsp;                           </li>

&nbsp;                           <li class="flex justify-between items-center border-b border-gray-100 py-1">

&nbsp;                               <span class="font-medium">Altura Média Geral:</span>

&nbsp;                               <span class="font-bold text-gray-800">${resultados.mediaAlturaGeral.toFixed(2)}m</span>

&nbsp;                           </li>

&nbsp;                       </ul>

&nbsp;                   </div>



&nbsp;                   <!-- Distribuição por Faixa de Altura -->

&nbsp;                   <div>

&nbsp;                       <h3 class="text-xl font-semibold mb-4 text-purple-600 border-b pb-2">DISTRIBUIÇÃO POR FAIXA DE ALTURA</h3>

&nbsp;                       <div class="space-y-2">

&nbsp;                           ${gerarFaixaHTML("Baixa (<1.70m)", resultados.faixaBaixa.length, 'bg-red-400')}

&nbsp;                           ${gerarFaixaHTML("Média (1.70-1.79m)", resultados.faixaMedia.length, 'bg-yellow-400')}

&nbsp;                           ${gerarFaixaHTML("Alta (≥1.80m)", resultados.faixaAlta.length, 'bg-green-400')}

&nbsp;                       </div>

&nbsp;                   </div>



&nbsp;               </div>

&nbsp;           `;



&nbsp;           // Injeta o conteúdo no DOM

&nbsp;           container.innerHTML = htmlContent;

&nbsp;       }



&nbsp;       /\*\*

&nbsp;        \* Função auxiliar para gerar o HTML de uma faixa de altura.

&nbsp;        \*/

&nbsp;       function gerarFaixaHTML(label, count, barColor) {

&nbsp;           const percentage = ((count / NUM\_PESSOAS) \* 100).toFixed(0);

&nbsp;           return `

&nbsp;               <div class="mb-3">

&nbsp;                   <div class="flex justify-between mb-1 text-sm font-medium text-gray-700">

&nbsp;                       <span>${label}</span>

&nbsp;                       <span>${count} pessoas (${percentage}%)</span>

&nbsp;                   </div>

&nbsp;                   <div class="w-full bg-gray-200 rounded-full h-2.5">

&nbsp;                       <div class="${barColor} h-2.5 rounded-full" style="width: ${percentage}%"></div>

&nbsp;                   </div>

&nbsp;               </div>

&nbsp;           `;

&nbsp;       }



&nbsp;       // Executa a função principal ao carregar a janela

&nbsp;       window.onload = exibirResultados;



&nbsp;   </script>

</body>

</html>

