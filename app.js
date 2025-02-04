function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let resultado = document.getElementById("resultado");
    let interpretacion = document.getElementById("interpretacion");

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.textContent = "Valores inválidos";
        return;
    }

    let imc = peso / (altura * altura);
    resultado.textContent = `IMC: ${imc.toFixed(2)}`;

    if (imc < 18.5) {
        interpretacion.textContent = "Bajo peso";
    } else if (imc < 25) {
        interpretacion.textContent = "Peso normal";
    } else if (imc < 30) {
        interpretacion.textContent = "Sobrepeso";
    } else {
        interpretacion.textContent = "Obesidad";
    }
}