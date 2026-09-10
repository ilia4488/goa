const btn = document.querySelector('.par2');
const cards = document.querySelectorAll('.card1');
const unreadDots = document.querySelectorAll('.span2');

btn.addEventListener('click', () => {
  cards.forEach((card) => {
    card.style.backgroundColor = 'white';
  });

  unreadDots.forEach((dot) => {
    dot.style.display = 'none';
  });
});