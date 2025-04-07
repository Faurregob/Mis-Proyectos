document.addEventListener('DOMContentLoaded', function() {
    const temperatureInput = document.getElementById('temperature');
    const toCelsiusBtn = document.getElementById('toCelsius');
    const toFahrenheitBtn = document.getElementById('toFahrenheit');
    const resultDiv = document.getElementById('result');

    function convertToCelsius() {
        const fahrenheit = parseFloat(temperatureInput.value);
        if (isNaN(fahrenheit)) {
            resultDiv.textContent = 'Por favor ingresa un número válido';
            return;
        }
        const celsius = (fahrenheit - 32) * 5/9;
        resultDiv.textContent = `${fahrenheit}°F = ${celsius.toFixed(2)}°C`;
    }

    function convertToFahrenheit() {
        const celsius = parseFloat(temperatureInput.value);
        if (isNaN(celsius)) {
            resultDiv.textContent = 'Por favor ingresa un número válido';
            return;
        }
        const fahrenheit = (celsius * 9/5) + 32;
        resultDiv.textContent = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
    }

    toCelsiusBtn.addEventListener('click', convertToCelsius);
    toFahrenheitBtn.addEventListener('click', convertToFahrenheit);

    // Opcional: Permitir conversión con Enter
    temperatureInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            // Convertir según el último botón clickeado o a Celsius por defecto
            if (document.activeElement === toFahrenheitBtn || 
                (document.activeElement !== toCelsiusBtn && temperatureInput.value.includes('C'))) {
                convertToFahrenheit();
            } else {
                convertToCelsius();
            }
        }
    });
});