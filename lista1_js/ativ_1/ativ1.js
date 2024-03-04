const mostrarCategoria = () => {
    let idade = document.getElementById('idade').value;

    if (idade < 18){
        document.getElementById('resultado').innerHTML = `Você está na categoria Juvenil`;
    } else {
        document.getElementById('resultado').innerHTML = `Você está na categoria Adulto`
    }
}