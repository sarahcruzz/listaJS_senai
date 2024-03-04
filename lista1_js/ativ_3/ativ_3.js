const calcularIMC = () => {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let imc = peso / (altura * altura);

    if (imc < 18.5){
        document.getElementById('resultado').innerHTML = `Seu IMC é ${imc.toFixed(2)} - Abaixo do peso`;
    } else if (imc >= 18.5 && imc < 25){
        document.getElementById('resultado').innerHTML = `Seu IMC é ${imc.toFixed(2)} - Normal`;
    } else if (imc >= 25 && imc < 30){
        document.getElementById('resultado').innerHTML = `Seu IMC é ${imc.toFixed(2)} - Acima do peso`;
    } else {
        document.getElementById('resultado').innerHTML = `Seu IMC é ${imc.toFixed(2)} - Obeso`;
    }

}