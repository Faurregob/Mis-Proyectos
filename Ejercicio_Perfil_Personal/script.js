const themeToggle = document.getElementById('themeToggle');
        const body = document.body;

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-theme');
            
            // Cambiar el texto del botón según el tema actual
            if (body.classList.contains('dark-theme')) {
                themeToggle.textContent = 'Tema claro';
            } else {
                themeToggle.textContent = 'Tema oscuro';
            }
        });