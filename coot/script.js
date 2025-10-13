// IntersectionObserver for photo reveal animation
const photos = document.querySelectorAll('.photo');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target.classList.remove('hidden');
    }
  });
}, { threshold: 0.3 });

photos.forEach(photo => observer.observe(photo));

// Floating hearts animation
setInterval(() => {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = '❤';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (4 + Math.random() * 3) + 's';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}, 800);
