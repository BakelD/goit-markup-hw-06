const refs = {
  modalOpenBtn: document.querySelector('.hero-btn'),
  backdrop: document.querySelector('.backdrop'),
  modalCloseBtn: document.querySelector('.modal-close-btn'),
  burgerMenuOpenBtn: document.querySelector('.burger-menu-btn'),
  burgerMenuCloseBtn: document.querySelector('.burger-menu-close-btn'),
  burgerMenu: document.querySelector('.burger-menu'),
};

refs.modalOpenBtn.addEventListener('click', () => {
  refs.backdrop.classList.add('is-open');
  document.body.style.overflow = 'hidden';
});

refs.modalCloseBtn.addEventListener('click', () => {
  refs.backdrop.classList.remove('is-open');
  document.body.style.overflow = 'auto';
});

refs.burgerMenuOpenBtn.addEventListener('click', () => {
  refs.burgerMenu.classList.add('is-open');
});

refs.burgerMenuCloseBtn.addEventListener('click', () => {
  refs.burgerMenu.classList.remove('is-open');
});
