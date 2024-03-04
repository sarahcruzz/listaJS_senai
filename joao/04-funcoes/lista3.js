console.log('Lista 03')
/*
Leia dois números e a opção escolhida pelo usuário, sendo:
1 – Apresente a c. (Com parâmetros e Com retorno).
2 – Apresenta o menor número. (Com parâmetros e Com retorno).
3 – Apresenta a diferença entre o maior e o menor número. (Com parâmetros e Com retorno).
4 – Apresenta os números em ordem crescente. (Com parâmetros e Sem retorno).

Os dois números devem ser diferentes. Caso sejam informados números iguais 
apresente mensagem de “erro” e solicite novamente os números.

Cada opção será implementada em uma função.

*/

function media(n1,n2){
    return (n1 + n2) /2
}

function menor_numero(n1,n2){
    if (n1 < n2){
        return n1
    }else{
        return n2
    }
}

function diferenca(n1,n2){
    return n1 - n2
}

function ordem_crescente(n1,n2){
    if (n1 < n2){
        let texto = n1+","+ n2
        return texto
    }else{
        let texto = n2+","+ n1
        return texto
    }
}
const n1 = Number(prompt("Digite o primeiro numero:"))
const n2 = Number(prompt("Digite o segundo numero:"))
while(true){
    

    if (n1 == n2){
        alert("!!!Os numero nao podem ser iguais!!!")
        continue
    }       
    const escolha = Number(prompt("Escolha uma operação: \n 1- média aritmética dos números \n 2- Apresenta o menor número \n 3- Apresenta a diferença entre o maior e o menor número. \n 4- Apresenta os números em ordem crescente"))
    switch (escolha) {
        case 1:
            alert(media(n1,n2))
            continue
        case 2:
            alert(menor_numero(n1,n2))
            continue
        case 3:
            alert(diferenca(n1,n2))
            continue
        case 4:
            alert(ordem_crescente(n1,n2))
            continue
            
    
        default:
            alert("erro")
            break;
    }
    

    

}