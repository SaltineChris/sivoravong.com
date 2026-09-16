document.addEventListener('DOMContentLoaded', () => {
  // Update copyright year dynamically
  const currentYearElement = document.getElementById('currentYear');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }

  // Copy to Clipboard Functionality
  const copyBtn = document.getElementById('copyBtn');
  const tooltip = document.getElementById('tooltip');
  const emailAddress = 'charchris@sivoravong.com';

  if (copyBtn && tooltip) {
    // Keep reference to original SVG icon and tooltip text
    const originalIconHTML = copyBtn.innerHTML;
    const originalTooltipText = tooltip.textContent;

    // Checkmark SVG for success state
    const checkIconHTML = `
      <svg class="copy-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span class="tooltip-text" id="tooltip" aria-live="polite">Copied!</span>
    `;

    copyBtn.addEventListener('click', async () => {
      try {
        // Use modern navigator clipboard API
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(emailAddress);
          showSuccessState();
        } else {
          // Fallback for older browsers or insecure environments
          fallbackCopyText(emailAddress);
        }
      } catch (err) {
        console.error('Failed to copy email: ', err);
        // Direct feedback on failure
        tooltip.textContent = 'Failed to copy';
        copyBtn.setAttribute('aria-label', 'Failed to copy email');
        setTimeout(() => {
          tooltip.textContent = originalTooltipText;
          copyBtn.setAttribute('aria-label', 'Copy email to clipboard');
        }, 2000);
      }
    });

    function showSuccessState() {
      copyBtn.classList.add('copied');
      copyBtn.innerHTML = checkIconHTML;
      copyBtn.setAttribute('aria-label', 'Email address copied to clipboard');
      
      // Keep tooltip visible during the success state
      const activeTooltip = copyBtn.querySelector('#tooltip');
      if (activeTooltip) {
        activeTooltip.style.visibility = 'visible';
        activeTooltip.style.opacity = '1';
        activeTooltip.style.transform = 'translateX(-50%) translateY(0)';
      }

      // Revert back to original state after 2 seconds
      setTimeout(() => {
        copyBtn.classList.remove('copied');
        copyBtn.innerHTML = originalIconHTML;
        copyBtn.setAttribute('aria-label', 'Copy email to clipboard');
      }, 2200);
    }

    function fallbackCopyText(text) {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      
      // Avoid scrolling to bottom on mobile/desktop
      textArea.style.top = '0';
      textArea.style.left = '0';
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        const successful = document.execCommand('copy');
        if (successful) {
          showSuccessState();
        } else {
          throw new Error('execCommand returned false');
        }
      } catch (err) {
        console.error('Fallback copy failed: ', err);
        tooltip.textContent = 'Copy not supported';
      } finally {
        document.body.removeChild(textArea);
      }
    }
  }

  // Initialize Living Botanical Canvas Particles (Overdrive Mode)
  initAmbientBotanicalCanvas();
});

/**
 * Living Botanical Canvas Engine (Overdrive)
 * Renders slow-drifting, gilded botanical micro-spores across the Mulberry Green
 * atmosphere with gentle Brownian wandering and fluid cursor-wake interaction.
 */
function initAmbientBotanicalCanvas() {
  const canvas = document.getElementById('ambientCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  let width = 0;
  let height = 0;
  let dpr = 1;
  let particles = [];
  let animationFrameId = null;
  let isRunning = false;

  // Pointer position and influence radius
  const pointer = {
    x: -9999,
    y: -9999,
    radius: 130,
    isActive: false
  };

  // Color palette: Gilded Burnished Gold and soft Warm Parchment
  const palette = [
    { r: 184, g: 134, b: 11 },   // Burnished Gold (#B8860B)
    { r: 201, g: 147, b: 15 },   // Soft Amber Gold (#C9930F)
    { r: 245, g: 238, b: 220 }   // Warm Parchment (#F5EEDC)
  ];

  class BotanicalParticle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 10;
      this.baseRadius = 0.75 + Math.random() * 1.5; // 0.75px to 2.25px
      this.radius = this.baseRadius;

      // Gentle vertical drift upwards (simulating warm ambient drafts)
      this.vy = -(0.12 + Math.random() * 0.28);

      // Horizontal wandering oscillation
      this.vx = (Math.random() - 0.5) * 0.12;
      this.angle = Math.random() * Math.PI * 2;
      this.angleSpeed = 0.006 + Math.random() * 0.012;
      this.wanderAmplitude = 0.2 + Math.random() * 0.35;

      // Color and luminous breathing modulation
      const color = palette[Math.floor(Math.random() * palette.length)];
      this.r = color.r;
      this.g = color.g;
      this.b = color.b;
      this.baseAlpha = 0.08 + Math.random() * 0.26; // Subdued: 0.08 to 0.34
      this.pulseSpeed = 0.008 + Math.random() * 0.016;
      this.pulseOffset = Math.random() * Math.PI * 2;

      // Cursor wake displacement
      this.dx = 0;
      this.dy = 0;
    }

    update(time) {
      // Natural botanical drift & wandering
      this.angle += this.angleSpeed;
      const wander = Math.sin(this.angle) * this.wanderAmplitude;

      // Fluid cursor parting effect
      if (pointer.isActive) {
        const distX = this.x - pointer.x;
        const distY = this.y - pointer.y;
        const dist = Math.hypot(distX, distY);

        if (dist < pointer.radius && dist > 0) {
          const force = (1 - dist / pointer.radius) * 1.1;
          const normalX = distX / dist;
          const normalY = distY / dist;
          this.dx += normalX * force * 1.2;
          this.dy += normalY * force * 1.2;
        }
      }

      // Viscous damping for soft, organic return
      this.dx *= 0.93;
      this.dy *= 0.93;

      this.x += this.vx + wander + this.dx;
      this.y += this.vy + this.dy;

      // Seamless toroidal edge wrapping
      if (this.y < -15) {
        this.y = height + 10;
        this.x = Math.random() * width;
      }
      if (this.x < -15) this.x = width + 15;
      if (this.x > width + 15) this.x = -15;
    }

    draw(time) {
      const alphaMod = 0.75 + 0.25 * Math.sin(time * this.pulseSpeed + this.pulseOffset);
      const alpha = Math.max(0, Math.min(1, this.baseAlpha * alphaMod));

      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${alpha.toFixed(3)})`;
      ctx.fill();
    }
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Dynamic count scaled by viewport area (capped between 28 and 50 particles)
    const targetCount = Math.min(50, Math.max(28, Math.floor((width * height) / 28000)));

    if (particles.length === 0) {
      particles = Array.from({ length: targetCount }, () => new BotanicalParticle());
    } else if (particles.length < targetCount) {
      while (particles.length < targetCount) {
        particles.push(new BotanicalParticle());
      }
    } else if (particles.length > targetCount) {
      particles.length = targetCount;
    }

    if (prefersReducedMotion.matches) {
      renderStaticFrame();
    }
  }

  function renderStaticFrame() {
    ctx.clearRect(0, 0, width, height);
    for (const p of particles) {
      p.draw(0);
    }
  }

  let time = 0;
  function animate() {
    if (!isRunning) return;

    ctx.clearRect(0, 0, width, height);
    time += 1;

    for (const p of particles) {
      p.update(time);
      p.draw(time);
    }

    animationFrameId = requestAnimationFrame(animate);
  }

  function start() {
    if (prefersReducedMotion.matches) {
      renderStaticFrame();
      return;
    }
    if (!isRunning) {
      isRunning = true;
      animationFrameId = requestAnimationFrame(animate);
    }
  }

  function stop() {
    if (isRunning) {
      isRunning = false;
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    }
  }

  // Passive Pointer Listeners
  window.addEventListener('pointermove', (e) => {
    pointer.x = e.clientX;
    pointer.y = e.clientY;
    pointer.isActive = true;
  }, { passive: true });

  window.addEventListener('pointerleave', () => {
    pointer.isActive = false;
  }, { passive: true });

  window.addEventListener('resize', resize, { passive: true });

  // Conserve battery and cycles when tab is not visible
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stop();
    } else {
      start();
    }
  });

  // Respect user's motion preference changes dynamically
  prefersReducedMotion.addEventListener('change', () => {
    if (prefersReducedMotion.matches) {
      stop();
      renderStaticFrame();
    } else {
      start();
    }
  });

  // Initial boot
  resize();
  start();
}
