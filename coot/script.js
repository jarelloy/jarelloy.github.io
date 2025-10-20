// Smooth reveal / hide effect for each photo section
const photos = document.querySelectorAll('.photo');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target.classList.remove('hidden');
    } else {
      // Hide again when scrolling upward or downward out of view
      entry.target.classList.remove('visible');
      entry.target.classList.add('hidden');
    }
  });
}, { threshold: 0.5 });

photos.forEach(photo => observer.observe(photo));

// Floating hearts animation
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = '❤';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (4 + Math.random() * 3) + 's';
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}

// Add a heart every 800ms
setInterval(createHeart, 800);
