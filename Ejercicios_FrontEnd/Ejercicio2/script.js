document.addEventListener('DOMContentLoaded', function() {
    const enviarBtn = document.getElementById('enviarBtn');
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const mensajeDiv = document.getElementById('mensaje');
    
    enviarBtn.addEventListener('click', function() {
        // Obtener valores de los campos
        const nombre = nombreInput.value.trim();
        const email = emailInput.value.trim();
        
        // Validar que no estén vacíos
        if (nombre === '' || email === '') {
            mensajeDiv.textContent = 'Por favor, completa todos los campos';
            mensajeDiv.className = 'error';
        } else {
            mensajeDiv.textContent = 'Formulario enviado correctamente';
            mensajeDiv.className = 'success';
            
            // Opcional: Limpiar los campos después de enviar
            nombreInput.value = '';
            emailInput.value = '';
        }
    });
});