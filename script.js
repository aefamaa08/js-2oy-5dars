// Функция для отправки сообщения
function sendMessage() {
  alert("Сообщение отправлено!");
}

// Функция для переключения темы
function toggleTheme() {
  const body = document.body;
  const themeIcon = document.querySelector('.theme-btn');

  // Переключаем класс "dark" для смены темы
  body.classList.toggle("dark");

  // Изменяем текст кнопки в зависимости от темы
  themeIcon.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
}

// Функция для поиска заметок
function searchNotes() {
  const searchInput = document.querySelector('.search-input').value.toLowerCase();
  alert(`Ищем заметки с текстом: "${searchInput}"`);
}
