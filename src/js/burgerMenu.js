const toggleBtn = document.querySelector('[data-state]');
const burgerMenuEl = document.querySelector('[data-menu]');
const openIcon = toggleBtn.querySelector('[data-icon="open"]');
const closeIcon = toggleBtn.querySelector('[data-icon="close"]');

toggleBtn.addEventListener('click', () => {
  const isOpen = toggleBtn.dataset.state === 'open';

  toggleBtn.dataset.state = isOpen ? 'closed' : 'open';
  burgerMenuEl.dataset.visible = isOpen ? 'close' : 'open';
  openIcon.dataset.visible = isOpen ? 'true' : 'false';
  closeIcon.dataset.visible = isOpen ? 'false' : 'true';
});
