document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const guessInput = document.getElementById('guessInput');
    const guessBtn = document.getElementById('guessBtn');
    const message = document.getElementById('message');
    const attemptsDisplay = document.getElementById('attempts');
    const resetBtn = document.getElementById('resetBtn');
    
    // Variables del juego
    let secretNumber;
    let attempts;
    
    // Iniciar nuevo juego
    function startNewGame() {
        secretNumber = Math.floor(Math.random() * 50) + 1;
        attempts = 0;
        guessInput.value = '';
        message.textContent = '';
        message.className = '';
        attemptsDisplay.textContent = 'Intentos: 0';
        guessInput.focus();
    }
    
    // Verificar la adivinanza del usuario
    function checkGuess() {
        const userGuess = parseInt(guessInput.value);
        
        // Validar la entrada
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 50) {
            message.textContent = 'Por favor ingresa un número entre 1 y 50';
            message.className = '';
            return;
        }
        
        // Incrementar intentos
        attempts++;
        attemptsDisplay.textContent = `Intentos: ${attempts}`;
        
        // Comparar con el número secreto
        if (userGuess === secretNumber) {
            message.textContent = `¡Correcto! El número era ${secretNumber}`;
            message.className = 'correct';
            guessInput.disabled = true;
            guessBtn.disabled = true;
        } else if (userGuess > secretNumber) {
            message.textContent = 'Demasiado alto. Intenta con un número menor.';
            message.className = 'high';
        } else {
            message.textContent = 'Demasiado bajo. Intenta con un número mayor.';
            message.className = 'low';
        }
        
        // Limpiar el campo de entrada
        guessInput.value = '';
        guessInput.focus();
    }
    
    // Event Listeners
    guessBtn.addEventListener('click', checkGuess);
    resetBtn.addEventListener('click', startNewGame);
    guessInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkGuess();
        }
    });
    
    // Iniciar el juego al cargar la página
    startNewGame();
});