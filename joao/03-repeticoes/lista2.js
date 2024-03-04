console.log('Lista 02')
/*
1. [while] Desenvolva uma página que leia as notas de uma disciplina de uma sala com “n” alunos 
   (ficará a critério do usuário indicar quando os alunos acabaram).  Ao término, apresente:
   -> A quantidade de notas lidas.
   -> A média aritmética das notas da sala.

2. [do..while] Desenvolva uma página que leia as idades de “n” pessoas até que a soma das idades 
   ultrapasse 100 anos. Ao término, apresente:
   -> A idade da pessoa mais velha.

3. [for] Desenvolva uma página que leia um número inicial e um número final e apresente os números 
   entre esse intervalo de 3 em 3. Por exemplo, de 10 a 30 seria apresentado 10, 13, 16, 19, 22, 25 e 28.
*/

let idade = [];
let somas_idades = 0
alert("Enquanto nao soma 100 nas idade não passa para o proximo exercicio!!!")
while(somas_idades < 100){
   const pergunta = Number(prompt("qual sua idade"))
   idade.push(pergunta)
   
   for (let a= 0; a < idade.length;a++){
      somas_idades += idade[a]
      
   }
}
alert("!!!Concluido!!!")
alert("Proximo Exercicio")


let lista_notas = []
let soma =0
const quantidade = Number(prompt("quantas notas serao inseridas?"))
for (let index = 0; index < quantidade; index++) {
   const notas = Number(prompt("digite a nota: "))
   lista_notas.push(notas)
  
}
for (let i = 0; i < lista_notas.length; i++) {
   soma += lista_notas[i];
   soma = soma / quantidade
}

alert("A soma de "+quantidade + " notas, deu: "+soma)


alert("!!!Concluido!!!")
alert("Proximo Exercicio")



const n1 = Number(prompt("Digite o primeiro numero: "))
const n2 = Number(prompt("Digite o segundo numero:"))

for(a = n1 + 1; a < n2; a++){
   alert(a)
}