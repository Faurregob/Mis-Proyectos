document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.reservation-form');
    const reservationTableContainer = document.querySelector('.reservation-table-container');
    const reservationTable = document.querySelector('.reservation-table tbody');
    const cancelButton = document.getElementById('cancel-reservation');
    const newReservationButton = document.getElementById('new-reservation');
    const reservationMessage = document.createElement('div');
    reservationMessage.style.marginTop = '20px';
    reservationMessage.style.color = 'green';

    // Función para manejar el formulario de reserva
    form.addEventListener('submit', function (e) {
        e.preventDefault();  // Prevenir el envío del formulario

        // Obtener los valores del formulario
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const date = document.getElementById('date').value.trim();
        const time = document.getElementById('time').value.trim();
        const guests = document.getElementById('guests').value.trim();

        // Verificar que los campos no estén vacíos
        if (name && email && phone && date && time && guests) {
            // Verificar que el correo contenga un "@"
            if (!email.includes('@')) {
                alert("Por favor, ingrese un correo electrónico válido con '@'.");
                return; // Detener el envío del formulario si el correo no es válido
            }

            // Crear una nueva fila en la tabla de reservas
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${name}</td>
                <td>${email}</td>
                <td>${phone}</td>
                <td>${date}</td>
                <td>${time}</td>
                <td>${guests}</td>
                <td><button id="cancel-reservation" class="btn-cancel-reservation">Cancelar Reservación</button></td>
            `;

            // Agregar la nueva fila a la tabla
            reservationTable.appendChild(newRow);

            // Mostrar la tabla si no está visible
            reservationTableContainer.style.display = 'block';

            // Limpiar los campos del formulario
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('date').value = '';
            document.getElementById('time').value = '';
            document.getElementById('guests').value = '';

            // Mostrar el mensaje de éxito
            reservationMessage.textContent = "¡Reserva realizada con éxito!";
            form.appendChild(reservationMessage);
        } else {
            alert("Por favor, complete todos los campos.");
        }
    });

    // Función para manejar la cancelación de la reservación
    reservationTable.addEventListener('click', function (e) {
        if (e.target && e.target.id === 'cancel-reservation') {
            const row = e.target.closest('tr');
            row.remove();  // Eliminar la fila de la tabla
            if (reservationTable.rows.length === 0) {
                reservationTableContainer.style.display = 'none'; // Ocultar la tabla si no hay reservas
            }
            alert('La reservación ha sido cancelada.');
        }
    });

    // Función para mostrar/ocultar el formulario de nueva reservación
    newReservationButton.addEventListener('click', function () {
        const formContainer = document.querySelector('.reservation-form-container');
        formContainer.style.display = formContainer.style.display === 'none' ? 'block' : 'none';
    });
});
