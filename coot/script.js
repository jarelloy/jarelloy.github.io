const photos = document.querySelectorAll('.photo');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const current = entry.target;

    if (entry.isIntersecting) {
      // Fade in current
      current.classList.add('visible');
      current.classList.remove('fade-out');

      // Fade out the previous one
      const prev = Array.from(photos).indexOf(current) - 1;
      if (prev >= 0) {
        photos[prev].classList.remove('visible');
        photos[prev].classList.add('fade-out');
      }
    }
  });
}, { threshold: 0.6 });

photos.forEach((photo) => observer.observe(photo));

// Floating hearts animation (unchanged)
setInterval(() => {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = '❤';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (4 + Math.random() * 3) + 's';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}, 800);
