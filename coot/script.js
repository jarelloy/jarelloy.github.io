// IntersectionObserver for photo reveal animation
const photos = document.querySelectorAll('.photo');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target.classList.remove('hidden');
    } else {
      // Hide photo when it leaves viewport (scrolling back up)
      entry.target.classList.remove('visible');
      entry.target.classList.add('hidden');
    }
  });
}, { threshold: 0.6 }); // Trigger when 60% of the element is visible

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
