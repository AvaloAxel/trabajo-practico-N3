// Petición GET a la API
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => {
    const tareasCompletadas = data.filter(tarea => tarea.completed === true);

    const lista = document.getElementById('listaTareas');

    tareasCompletadas.forEach(tarea => {
      const item = document.createElement('li');
      item.textContent = tarea.title;
      lista.appendChild(item);
    });
  })
  .catch(error => {
    console.error('Error al obtener las tareas:', error);
  });
