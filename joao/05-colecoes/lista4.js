console.log('Lista 04')
/*
1. Desenvolva um programa que a partir de um vetor de inteiros com 5 valores inicializados na declaração 
   apresente o dobro de cada valor armazenado.

2. Desenvolva um programa que a partir de um vetor de inteiros com 8 valores inicializados na declaração 
   apresente a média aritméticas desses valores.

3. Desenvolva um programa que leia a idade de 20 pessoas e apresente as idades acima da média.

4. Desenvolva um programa que leia 10 números e apresente os valores pares. 
   Caso não tenha nenhum número par apresente a mensagem “Todos os números são ímpares.”

5. Desenvolva um programa que leia 8 números garantindo que os valores informados estejam entre 100 e 200 
   (caso não esteja apresente uma mensagem de “valor inválido”). Depois de preenchido apresente os valores armazenados.

6. Desenvolva um programa que a partir de um vetor de Strings com 10 nomes inicializados na declaração 
   leia um novo nome e verifique se ele está armazenado no vetor, se estiver, apresenta a posição (índice) onde ele está, 
   caso contrário, apresente a mensagem “Nome não encontrado!”

7. Desenvolva uma nova versão do programa anterior em que o usuário terá a quantidade de tentativas limitada a 5. 
   Caso o nome seja encontrado apresente a posição (índice) onde ele está e em qual tentativa ele foi encontrado.

8. Desenvolva um programa que leia 6 números inteiros e armazene em um vetor A. 
   Carregue um vetor B (de mesmo tipo e tamanho) com a metade dos valores armazenados em A. 
   Apresente os valores dos dois vetores.

9. Desenvolva um programa que leia 5 números inteiros e armazene em um vetor A. 
   Leia 5 números inteiros e armazene em um vetor B. 
   Carregue e apresente um vetor C com os valores de A e B alternados. 
*/

alert("!!!!!Exercicio 1!!!!")
let lista_ex1 = [1,2,3,4,5];

for(i = 0; i< lista_ex1.length; i++){
   alert("Dobro: "+ lista_ex1[i] * 2)
}

alert("!!Exercicio 2!!")

let lista_ex2 = [1,2,3,4,5,6,7,8]
let soma = 0
for(a = 0; a < lista_ex2.length; a++){
   soma += lista_ex2[a]

}

alert("TOTAL: "+soma)


alert("!!Exercicio 3!!")
let soma2 = 0
let lista_ex3 = []
for(j = 1; j = 20 ; j++){
   const idade  = Number(prompt("Digite a idade de 20 pessoas"+j))
   lista_ex3.push(idade)


}
for(y = 0; y < lista_ex3.length ; y++){
   soma2 += lista_ex3[y]

}
soma2 = soma2 /20
alert("A media é: "+ soma2)


alert("!!Exercicio 4!!")
let lista_ex4_pares = []
let lista_ex4_impares = []

for(q = 0; q < 3; q++){
   const numeros = Number(prompt("Insira os 10 numeros"))
   if (numeros %2 ==0){
      lista_ex4_pares.push(numeros)
   }else{
      lista_ex4_impares.push(numeros)
   }

}


alert("IMPARES: "+ lista_ex4_impares)
alert("PARES: "+ lista_ex4_pares)

alert("!!Exercicio 5!!")
const numeros_list_5 = [];

alert("Digite 8 números entre 100 e 200:");

for (let i = 0; i < 8; i++) {
    let numero = Number(prompt("Digite o número " + (i + 1) + ":"));
    
    if (numero >= 100 && numero <= 200) {
       numeros_list_5.push(numero);
    } else {
        alert("Valor inválido! Por favor, digite um número entre 100 e 200.");
        i--; // Volta uma iteração para que o usuário digite novamente o número inválido
    }
}

alert("Os números armazenados são: " + numeros_list_5.join(", "));


alert("!!Exercicio 6!!")
const nomes = ["Ana", "João", "Maria", "Pedro", "Lucas", "Julia", "Carlos", "Mariana", "Felipe", "Luiza"];
const novoNome = prompt("Digite um novo nome:");

const indice = nomes.indexOf(novoNome);
if (indice !== -1) {
    alert("O nome está armazenado na posição " + indice);
} else {
    alert("Nome não encontrado!");
}

 alert("!!Exercicio 7!!")
const tentativasMaximas = 5;
let tentativas = 0;
let encontrado = false;

while (tentativas < tentativasMaximas && !encontrado) {
    const novoNome = prompt("Digite um novo nome:");
    const indice = nomes.indexOf(novoNome);
    if (indice !== -1) {
        alert("O nome está armazenado na posição " + indice + " e foi encontrado na tentativa " + (tentativas + 1));
        encontrado = true;
    } else {
        alert("Nome não encontrado!");
        tentativas++;
    }
}

if (!encontrado) {
    alert("Limite de tentativas atingido!");
}

 alert("!!Exercicio 8!!")
const vetorA_ex8 = [];
const vetorB_ex8 = [];

for (let m = 0; m < 6; m++) {
    const numero_ex8 = Number(prompt("Digite o número " + (i + 1) + ":"));
    vetorA.push(numero_ex8);
    vetorB.push(numero_ex8 / 2);
}

alert("Valores do vetor A: " + vetorA_ex8.join(", "));
alert("Valores do vetor B: " + vetorB_ex8.join(", "));

 alert("!!Exercicio 9!!")
const vetorA_ex9 = [];
const vetorB_ex9 = [];
const vetorC_ex9 = [];

for (let i = 0; i < 5; i++) {
    const numeroA = Number(prompt("Digite o número inteiro para o vetor A:"));
    const numeroB = Number(prompt("Digite o número inteiro para o vetor B:"));
    vetorA.push(numeroA);
    vetorB.push(numeroB);
}

for (let i = 0; i < 5; i++) {
    vetorC.push(vetorA_ex9[i]);
    vetorC.push(vetorB_ex9[i]);
}

alert("Valores do vetor C: " + vetorC_ex9.join(", "));
