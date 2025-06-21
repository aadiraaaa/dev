import { useEffect } from 'react';

export default function StarryBackground() {
  useEffect(() => {
    const starryBg = document.querySelector('.starry-bg');
    if (!starryBg) return;

    // Clear existing stars and nebulae
    starryBg.innerHTML = '';
    
    // Create stars
    const starCount = 50;
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.width = Math.random() * 3 + 1 + 'px';
      star.style.height = star.style.width;
      star.style.animationDelay = Math.random() * 3 + 's';
      starryBg.appendChild(star);
    }
    
    // Create nebula effects
    for (let i = 0; i < 3; i++) {
      const nebula = document.createElement('div');
      nebula.className = 'nebula';
      nebula.style.left = Math.random() * 100 + '%';
      nebula.style.top = Math.random() * 100 + '%';
      nebula.style.width = Math.random() * 200 + 100 + 'px';
      nebula.style.height = nebula.style.width;
      nebula.style.animationDelay = Math.random() * 8 + 's';
      starryBg.appendChild(nebula);
    }
  }, []);

  return <div className="starry-bg" />;
}
