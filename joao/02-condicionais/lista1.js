console.log('Lista 01')
/*
1. Desenvolva um script que leia a idade de um atleta e apresente a categoria a que ele pertence, sendo, 
   menores de 18 anos “Juvenil” e os demais “Adulto”. 

2. Desenvolva um script para uma pousada que cobra R$ 200,00 de diária mais uma taxa de serviço que varia 
   de acordo com o período de hospedagem, sendo:
   -> R$ 10,00 por diária em períodos maiores que 10 dias.
   -> R$ 15,00 por diária se o período for de 10 dias.
   -> R$ 20,00 por diária em períodos menores que 10 dias.
   Apresente o valor total da hospedagem a ser pago por um período informado pelo usuário.

3. O IMC (Índice de Massa Corporal) é um critério da Organização Mundial da Saúde para dar uma indicação 
   sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / (altura * altura). 
   Desenvolva um script que leia o peso e a altura de uma pessoa e apresente a sua condição, sendo:
   -> Abaixo de 18,5 é considerado “Abaixo do peso”.
   -> Entre 18,5 até 25 é considerado “Normal”.
   -> Entre 25 até 30 é considerado “Acima do peso”.
   -> Acima de 30 é considerado “Obeso”.
*/

while(true){
   const idade = prompt("qual a sua idade? ")


if (idade >= 18){
      alert("Voce esta na categoria Adulto :D")
      const escolha = confirm("Quer fazer sua hospedagem?")
      if (escolha){
         const dias = prompt("quantos dia pretende ficar hospedado?")
         if (dias > 10){
            let soma = dias * 10
            alert("Valor de sua Hospedagem é: "+ soma)

         }
         if (dias = 10){
            let soma = dias * 15
            alert("Valor de sua Hospedagem é: "+ soma)

         }
         if (dias > 10){
            let soma = dias * 20
            alert("Valor de sua Hospedagem é: "+ soma)

         }
      }else{
         alert("Vamos calcular o seu IMC então")
         const peso = Number(prompt("Digite seu peso"))
         const altura = Number(prompt("Imforme a sua altura"))
         const IMC = peso / (altura*altura)
         console.log(IMC)
         
         

         if(IMC => 30 ){
            alert("Obeso")
         } if (IMC < 30 && IMC > 25){
            alert("Acima do peso")
            
         } if(IMC <= 25 && IMC >= 18.5){
            alert("Normal")

         }
         if(IMC < 18.5){
            alert("Abaixo do peso")

         }
      }
   }else{
      alert("Voce esta na categoria juvenil :D")


   }

}
