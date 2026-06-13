const eventDate = new Date('2026-07-04T16:30:00-06:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = Math.max(eventDate - now, 0);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

const audio = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');

musicBtn.addEventListener('click', async () => {
  try {
    if (audio.paused) {
      await audio.play();
      musicBtn.classList.add('playing');
      musicBtn.textContent = '❚❚';
    } else {
      audio.pause();
      musicBtn.classList.remove('playing');
      musicBtn.textContent = '♪';
    }
  } catch (error) {
    alert('Agrega tu archivo musica.mp3 en la carpeta assets para activar la música.');
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
