function calculate(operator) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultElement = document.getElementById('result');
    
    // Validar que ambos campos tengan números válidos
    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "Por favor ingrese números válidos";
        resultElement.className = "result error";
        return;
    }
    
    let result;
    let error = false;
    
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                result = "Error: No se puede dividir entre cero";
                error = true;
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = "Operación no válida";
            error = true;
    }
    
    resultElement.textContent = result;
    resultElement.className = error ? "result error" : "result success";
}