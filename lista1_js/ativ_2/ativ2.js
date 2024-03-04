const calcularHospedagem = () => {
    let diaria = document.getElementById('diaria').value;
    let total;

    if (diaria > 10) {
        total = (diaria * 10) + 200;
        document.getElementById('resultado').innerHTML = `O valor total da hospedagem é de R$${total}`;
    } else if (diaria == 10 ) {
        total = (diaria * 15) + 200;
        document.getElementById('resultado').innerHTML = `O valor total da hospedagem é de R$${total}`;
    } else if (diaria < 10){
        total = (diaria * 20) + 200;
        document.getElementById('resultado').innerHTML = `O valor total da hospedagem é de R$${total}`;
    }
}