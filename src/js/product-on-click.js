import { openModal } from './modal-markup';

const listEl = document.querySelector('.content-wrapper');
listEl.addEventListener('click', onClickCart);

export function onClickCart(e) {
  e.preventDefault();
  const clickedElement = e.target;
  if (
    clickedElement.closest('a') &&
    clickedElement.closest('.products-card-link')
  ) {
    const id = clickedElement.closest('li').dataset.id;
    openModal(id);
  } else {
    return;
  }
}
