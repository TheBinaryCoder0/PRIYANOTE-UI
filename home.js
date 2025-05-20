const moodButtons = document.querySelectorAll('.mood-button');
const moodDisplay = document.getElementById('mood-display');

moodButtons.forEach(button => {
    button.addEventListener('click', () => {
    const selectedMood = button.textContent;
    moodDisplay.textContent = `Your Mood: ${selectedMood}`;
    });
});


const scrollContainer = document.querySelector('.suggestions');
  const leftBtn = document.querySelector('.scroll-btn.left');
  const rightBtn = document.querySelector('.scroll-btn.right');

  leftBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
  });

  rightBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
  });

  document.querySelectorAll('.mood-button').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.mood-button').forEach(btn => btn.classList.remove('selected'));
      button.classList.add('selected');
    });
  });