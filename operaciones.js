"use strict";
function calculate(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let resultado = 0;
    if (isNaN(num1) || isNaN(num2)) {
        resultado = "Ingresar valores correctos.";
    }
    else 
    {
        if (operation === "suma") 
            {
            resultado = num1 + num2;
            }
        else if (operation === "resta") 
            {
            resultado = num1 - num2;
            }
        else if (operation === "multiplicacion") 
            {
            resultado = num1 * num2;
            }
        else if (operation === "division") 
            {
            resultado = num2 !== 0 ? num1 / num2 : "Error matemático";
            }
    }
    document.getElementById("resultado").innerText = `Resultado de la operación = ${resultado}`;
}
