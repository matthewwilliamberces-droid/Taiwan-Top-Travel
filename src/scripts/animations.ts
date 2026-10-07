import { animate, createTimeline, createScope, stagger } from 'animejs';

export function isReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Initializes Hero section typography reveals and floating HUD badges
 */
export function initHeroAnimation(containerId: string = '#hero-section') {
  if (isReducedMotion()) return;

  const root = document.querySelector(containerId) as HTMLElement;
  if (!root) return;

  const scope = createScope({ root });

  scope.add(() => {
    // 1. Staggered reveal of badge, headline, subtitle, and CTA cluster (LCP flicker-free)
    animate('[data-animate="hero-badge"]', {
      opacity: [0, 1],
      y: [12, 0],
      duration: 500,
      delay: 30,
      ease: 'outExpo',
    });

    // LCP text elements paint immediately in HTML; polish position without snapping opacity
    animate('[data-hero-word]', {
      y: [10, 0],
      duration: 500,
      delay: stagger(60, { start: 0 }),
      ease: 'outQuart',
    });

    animate('[data-animate="hero-title-sub"]', {
      y: [8, 0],
      duration: 500,
      delay: 180,
      ease: 'outQuad',
    });

    animate('[data-animate="hero-subtitle"]', {
      y: [8, 0],
      duration: 500,
      delay: 220,
      ease: 'outExpo',
    });

    // Secondary actions and metrics fade in smoothly
    animate('[data-animate="hero-cta"]', {
      opacity: [0, 1],
      y: [16, 0],
      duration: 600,
      delay: 300,
      ease: 'outExpo',
    });

    animate('[data-animate="hero-stats"]', {
      opacity: [0, 1],
      y: [12, 0],
      duration: 600,
      delay: 380,
      ease: 'outExpo',
    });

    const bgImg = document.getElementById('hero-bg-img');
    if (bgImg) {
      animate(bgImg, {
        scale: [1, 1.08],
        duration: 25000,
        ease: 'linear'
      });
    }
  });

  document.addEventListener('astro:before-swap', () => {
    scope.revert();
  }, { once: true });
}

/**
 * Traces an SVG path dynamically for the Taiwan Route Map
 */
export function traceSvgRoute(pathElement: SVGPathElement) {
  if (isReducedMotion() || !pathElement) return;

  const length = pathElement.getTotalLength ? pathElement.getTotalLength() : 400;
  pathElement.style.strokeDasharray = `${length}`;
  pathElement.style.strokeDashoffset = `${length}`;

  animate(pathElement, {
    strokeDashoffset: [length, 0],
    duration: 1200,
    ease: 'inOutCubic',
  });
}

/**
 * Animates a numerical counter (e.g. estimated price or days)
 */
export function animateCounter(element: HTMLElement, targetValue: number, prefix: string = '$', suffix: string = '') {
  if (!element) return;
  if (isReducedMotion()) {
    element.textContent = `${prefix}${targetValue.toLocaleString()}${suffix}`;
    return;
  }

  const obj = { val: parseInt(element.getAttribute('data-current-val') || '0', 10) || targetValue * 0.7 };

  animate(obj, {
    val: targetValue,
    duration: 650,
    ease: 'outQuad',
    onUpdate: () => {
      element.textContent = `${prefix}${Math.round(obj.val).toLocaleString()}${suffix}`;
    },
    onComplete: () => {
      element.setAttribute('data-current-val', targetValue.toString());
      element.textContent = `${prefix}${targetValue.toLocaleString()}${suffix}`;
    }
  });
}
