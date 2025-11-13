// Trabalho Efetivo Discente - Manipulação de Arrays em JavaScript

// Tarefa 1: Criar um array com 5 nomes e exibir o terceiro nome no console

let nomes = \["João", "Maria", "Pedro", "Ana", "Carlos"];

console.log("Terceiro nome:", nomes\[2]);

// Tarefa 2: Adicionar um nome ao final e um no início do array

nomes.push("Lucas");  // Adiciona no final

nomes.unshift("Sofia");  // Adiciona no início

console.log("Array após adições:", nomes);

// Tarefa 3: Remover o último nome e exibir o array atualizado

nomes.pop();  // Remove o último

console.log("Array após remover o último:", nomes);

// Tarefa 4: Usar map() para criar um novo array dobrando os valores de \[2, 4, 6, 8]

let numeros = \[2, 4, 6, 8];

let dobrados = numeros.map(num => num \* 2);

console.log("Array dobrado:", dobrados);

// Tarefa 5: Usar filter() para criar um novo array apenas com números maiores que 5 em \[1, 3, 5, 7, 9]

let outroArray = \[1, 3, 5, 7, 9];

let maioresQue5 = outroArray.filter(num => num > 5);

console.log("Números maiores que 5:", maioresQue5);



