import { useEffect } from 'react';

export default function FloatingParticles() {
  useEffect(() => {
    const particleContainer = document.querySelector('.floating-particles');
    if (!particleContainer) return;

    // Clear existing particles
    particleContainer.innerHTML = '';
    
    // Create floating particles
    const particleCount = 35;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random starting position across full width
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = '100vh'; // Start from bottom
      
      // Consistent visible size
      const size = Math.random() * 2 + 2; // 2-4px
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      
      // Staggered animation timing for smooth continuous flow
      particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
      particle.style.animationDelay = (Math.random() * 12) + 's';
      
      particleContainer.appendChild(particle);
    }
  }, []);

  return <div className="floating-particles" />;
}