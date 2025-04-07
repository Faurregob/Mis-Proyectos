document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const taskList = document.getElementById('taskList');

    // Función para agregar una nueva tarea
    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText === '') {
            alert('Por favor escribe una tarea');
            return;
        }

        // Crear elemento de lista
        const li = document.createElement('li');
        li.className = 'task-item';

        // Crear span para el texto de la tarea
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        // Crear botón de eliminar
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        // Añadir elementos al li
        li.appendChild(taskSpan);
        li.appendChild(deleteBtn);

        // Añadir li a la lista
        taskList.appendChild(li);

        // Limpiar el campo de entrada
        taskInput.value = '';
        taskInput.focus();
    }

    // Evento click para el botón agregar
    addBtn.addEventListener('click', addTask);

    // Evento keypress para agregar con Enter
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});