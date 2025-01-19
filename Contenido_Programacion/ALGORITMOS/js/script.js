let correctAnswers = 0;

// Función para manejar las respuestas de cualquier pregunta
function checkAnswer(element) {
  console.log('Función llamada');
  
  // Encuentra el contenedor de la pregunta actual
  const questionContainer = element.closest('.question');
  
  // Encuentra el formulario correspondiente y su contenedor de retroalimentación
  const formContainer = questionContainer.closest('.kahoot-content');
  const feedback = formContainer.querySelector('.feedback');
  
  // Opciones de la pregunta actual
  const options = questionContainer.querySelectorAll('input[type="radio"]');
  
  // Limpia el mensaje anterior
  feedback.innerHTML = '';
  
  // Desactiva todas las opciones para evitar cambios
  options.forEach(option => {
    option.disabled = true;
  });
  
  // Verifica si la respuesta es correcta o incorrecta
  if (element.value === 'correct') {
    correctAnswers++;
    // Actualiza el contador de respuestas correctas
    document.getElementById('correct-answers').textContent = correctAnswers;
    feedback.innerHTML = "<p class='correct'>¡Respuesta correcta!</p>";
  } else {
    feedback.innerHTML = "<p class='incorrect'>Respuesta incorrecta. Intenta de nuevo.</p>";
  }
  
  // Mostrar feedback temporalmente y luego limpiarlo
  setTimeout(() => {
    feedback.innerHTML = '';
  }, 2000);
}
