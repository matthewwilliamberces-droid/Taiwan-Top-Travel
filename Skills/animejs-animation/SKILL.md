---
name: animejs-animation
description: "Production-grade animation engineering skill for Anime.js v4.x in Astro projects. Focuses on modular ESM imports, createScope lifecycle management, Astro View Transitions compatibility, and accessibility compliance."
risk: safe
source: local
date_added: "2026-10-07"
---

# Anime.js v4 Animation Skill (Astro Optimized)

[Anime.js v4](https://animejs.com/) is a completely modular, tree-shakeable JavaScript animation engine. This skill provides production patterns for orchestrating complex typography, SVG paths, micro-interactions, and scroll timelines inside **Astro** environments without memory leaks or main-thread jank.

---

## ⚠️ Critical Breaking Changes in v4.x (Mandatory Knowledge)

1. **NO Default Export:** Never write `import anime from 'animejs'`. Always use named imports:
   ```javascript
   import { animate, createTimeline, stagger, createScope, scroll, splitText } from 'animejs';
   ```
2. **NO Global Object:** Never call `anime({ ... })` or `anime.timeline()`. These are deprecated and will throw runtime errors.
3. **Functional Signature:** Use `animate(targets, parameters)` or `createTimeline({ defaults })`.
4. **Subpath Exports Available:**
   - `animejs` (core + standard modules)
   - `animejs/timeline`, `animejs/scroll`, `animejs/scope`, `animejs/splitText`

---

## When to Use This Skill

- Orchestrating multi-element landing page reveals (e.g. editorial hero layouts).
- Animating complex SVG paths (transit maps, island contours, dynamic route lines).
- Staggered entrances for content grids (cards, stats, itineraries).
- Text reveals using native v4 `splitText`.
- Micro-interactions that need physics-based spring curves.

## When NOT to Use This Skill

- Simple hover states, standard dropdowns, or basic fades (use native Tailwind CSS transitions instead).
- Full-page scroll pinning / horizontal scroll-jacking (use GSAP or native CSS scroll timelines instead).
- Server-side Astro frontmatter (Anime.js requires DOM and must only execute in client `<script>` tags).

---

## Standard Astro Integration Pattern

To prevent memory leaks during Astro client-side navigation (`<ViewTransitions />` or `<ClientRouter />`), **all animations must be encapsulated in a scope and torn down before page swaps**.

```typescript
import { createScope, createTimeline, stagger } from 'animejs';

export function initHeroAnimation(containerSelector: string = '#hero') {
  // 1. Accessibility Check (Mandatory WCAG Compliance)
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const root = document.querySelector(containerSelector);
  if (!root) return;

  // 2. Encapsulate inside createScope for complete lifecycle control
  const scope = createScope({ root });

  scope.add(() => {
    const tl = createTimeline({
      defaults: {
        ease: 'outExpo',
        duration: 900,
      },
    });

    // Staggered title and subtitle reveal
    tl.add('[data-animate="title"]', {
      y: [30, 0],
      opacity: [0, 1],
      delay: stagger(60),
    })
    .add('[data-animate="card"]', {
      y: [20, 0],
      opacity: [0, 1],
      scale: [0.98, 1],
      delay: stagger(80),
    }, '-=600');
  });

  // 3. Astro Lifecycle Teardown Hook
  document.addEventListener(
    'astro:before-swap',
    () => {
      scope.revert();
    },
    { once: true }
  );
}
```

---

## Astro Component Execution Template

In `.astro` files, mount scripts using the `astro:page-load` event:

```astro
---
// Server frontmatter - NO ANIME.JS IMPORTS HERE
---

<section id="hero" class="relative overflow-hidden">
  <h1 data-animate="title">Discover Taiwan</h1>
  <div data-animate="card">Destination Cards</div>
</section>

<script>
  import { initHeroAnimation } from '../scripts/animations/hero';

  // Run on first load and on every View Transition navigation
  document.addEventListener('astro:page-load', () => {
    initHeroAnimation('#hero');
  });
</script>
```

---

## Strict Rules & Performance Safeguards

1. **Accessibility First:** Always check `prefers-reduced-motion`. If enabled, elements should render immediately in their final state without tweening.
2. **Selective `will-change`:** Never apply `will-change` globally or leave it permanently on elements. If needed for complex SVG transforms, apply it right before animation and remove it on completion (`onComplete`).
3. **Data Attributes Over Classes:** Select targets via `[data-animate="..."]` rather than styling classes (`.title`, `.card`). This decouples animations from Tailwind class changes.
4. **Scope Teardown:** Every animated component or page must register cleanup with `astro:before-swap`. Never let orphaned timelines persist across route changes.
5. **No Main-Thread Blocking:** Avoid animating properties that trigger browser layout recalculations (`width`, `height`, `top`, `left`, `margin`). Stick strictly to GPU-composited properties: `transform` (`x`, `y`, `scale`, `rotate`) and `opacity`.
