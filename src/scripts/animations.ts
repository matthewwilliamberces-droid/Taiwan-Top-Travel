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
    // 1. Staggered reveal of badge, headline, subtitle, and CTA cluster
    animate('[data-animate="hero-badge"]', {
      opacity: [0, 1],
      y: [20, 0],
      duration: 800,
      ease: 'outExpo',
    });

    animate('[data-hero-word]', {
      opacity: [0, 1],
      y: [30, 0],
      filter: ['blur(12px)', 'blur(0px)'],
      duration: 1400,
      delay: stagger(250, { start: 150 }),
      ease: 'outQuart',
    });

    animate('[data-animate="hero-title-sub"]', {
      opacity: [0, 1],
      y: [20, 0],
      duration: 1000,
      delay: 1100,
      ease: 'outQuad',
    });

    animate('[data-animate="hero-subtitle"]', {
      opacity: [0, 1],
      y: [30, 0],
      duration: 1000,
      delay: 300,
      ease: 'outExpo',
    });

    animate('[data-animate="hero-cta"]', {
      opacity: [0, 1],
      y: [25, 0],
      duration: 900,
      delay: 450,
      ease: 'outExpo',
    });

    animate('[data-animate="hero-stats"]', {
      opacity: [0, 1],
      y: [20, 0],
      duration: 900,
      delay: 600,
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
