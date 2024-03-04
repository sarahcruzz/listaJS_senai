let notas = [];
let contador = 1;
let soma = 0

while(true){
    let alunos = Number(prompt('Deseja inserir a nota de um aluno?\n1 - Sim 2 - Não'))

    if(alunos == 1){
        let nota = Number(prompt(`Insira a nota do aluno ${contador}:`))
        notas.push(nota)
        contador += 1
        continue 
    }
    else{
        let num_alunos = notas.length;
        for(let i = 0; i < num_alunos; i++){
            soma += notas[i]
        }
        let media = soma/num_alunos

        alert(`Quantidade de notas lidas: ${num_alunos}\nMédia aritmética das notas lidas: ${media}`)
        break
    }
    

}