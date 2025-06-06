const items = document.querySelectorAll('.accordion-item');

items.forEach(item => {
  const title = item.querySelector('.accordion-title');
  const content = item.querySelector('.accordion-content');

  title.addEventListener('click', () => {
    const isOpen = item.classList.contains('active');

    if (isOpen) {
      content.style.maxHeight = null;
      item.classList.remove('active');
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      item.classList.add('active');
    }
  });
});
