const popup = document.getElementById('cookiePopup');
const buttons = document.querySelectorAll('.cookie-buttons .btn');

// Перевіряємо будь-яке рішення користувача
if (localStorage.getItem('cookiesAccepted') !== null) {
  popup.style.display = 'none';
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('accept')) {
      localStorage.setItem('cookiesAccepted', 'true');
    } else if (button.classList.contains('decline')) {
      localStorage.setItem('cookiesAccepted', 'false');
    }
    popup.style.display = 'none';
  });
});