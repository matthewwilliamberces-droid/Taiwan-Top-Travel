# 🌟 Taiwan Top Travel — Bespoke Luxury Concierge 2026

> **An ultra-high-performance creative engineering and UI/UX design showcase demonstrating high-impact motion choreography, GPU-accelerated horizontal pacing, and localized bespoke travel curation for Taiwan.**

[![Astro](https://img.shields.io/badge/Astro-5%2F7-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Anime.js](https://img.shields.io/badge/Anime.js-v4.5-F43F5E?style=flat-square)](https://animejs.com/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)
[![Build Time](https://img.shields.io/badge/Build_Time-%3C800ms-emerald?style=flat-square)]()

---

## 💎 Project Overview

**Taiwan Top Travel** is a digital showcase engineered for the modern luxury traveler. Built on an obsidian glassmorphic design system (`bg-zinc-950`, gold/amber micro-gradients, and editorial *Playfair Display* + *Inter* typography), the platform illustrates how heavy, cinematic motion design can coexist with near-instantaneous static site performance.

* **Live Demo Status:** Portfolio & Creative Engineering Concept Showcase.
* **Commercial Transition Roadmap:** See [`plan.md`](./plan.md) for licensing, CRM integration, and enterprise monetization specs.
* **Compliance Posture:** 100% compliant with freelance marketplace guidelines (Upwork / Fiverr TOS) with zero off-platform contact leaks.

---

## ⚡ Core Creative Engineering Features

### 1. 🎞️ Pinned Horizontal Runway (`HorizontalRunway.astro`)
* **Motion Engine:** Utilizes GPU hardware-accelerated transforms (`translate3d(-Xpx, 0, 0)`) driven by a normalized vertical scroll interpolation loop.
* **Pacing & Ergonomics:** Cards render with wide cinematic proportions (`620px` desktop / `85vw` mobile).
* **The Conversion "Safety Valve":** Overcomes the standard carousel drop-off trap by providing a global **"View All 10 as Grid"** modal drawer, allowing instantaneous side-by-side comparison with seamless jump-back synchronization.

### 2. 🚄 300 km/h Bullet Rail Visualizer (`TransitVisualizer.astro`)
* Interactive Shinkansen 700T transit corridor spanning Taipei to Kaohsiung Zuoying and Puyuma East Coast spurs.
* **Native Hydration:** Eliminates brittle HTML stringification in favor of direct client-side module references, enabling instant zero-latency station switching and connection disclosures.

### 3. 🗓️ 12-Month Micro-Climate Matrix (`SeasonalityMatrix.astro`)
* Dynamic monthly spotlight cards detailing temperature ranges, crowd indices, and signature spectacles (Alishan Cherry Blossoms, Taroko Canyon Roast, Firefly Seasons).
* Automated seasonal color synchronization matching legend palettes (Spring Emerald, Summer Amber, Autumn Orange, Winter Cyan).

### 4. 🧮 Live Journey Cost Estimator & Automated Handoff (`TripEstimator.astro`)
* Real-time pricing calculator adjusting for journey duration (3–14 days), party sizes, and tier multipliers.
* **Seamless Conversion Handoff:** Clicking *"Lock Estimate & Inquire"* dispatches stateful custom events that **auto-advance the Concierge Wizard directly to Step 2**, pre-populating duration and party sizes while activating an alert toast.

### 5. 🗺️ Complete Day-by-Day Editorial Narratives (`[slug].astro`)
* 10 dedicated dynamic routes featuring **54 individual day-by-day itineraries**.
* Every single day card is paired with verified, authentic photography representing real Taiwanese landmarks (The Lalu Sun Moon Lake, Songyue Coffee Manor, Taroko Marble Riverbed, Eluanbi Lighthouse, etc.).

### 6. 🧭 Mobile Navigation & Floating Ergonomic HUD (`FloatingHud.astro`)
* Full-screen frosted glass mobile drawer with quick section anchors and body scroll lock.
* Persistent bottom-right floating HUD equipped with an SVG circular scroll progress ring and quick-launch concierge trigger.

---

## 🛠️ Technology Stack

| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **Framework** | **Astro 5 / 7 (SSG)** | Zero-JS-by-default architecture. Lightning fast compilation (<800ms) with zero client hydration overhead. |
| **Styling** | **Tailwind CSS v4** | Modern `@tailwindcss/vite` engine with strict dark-mode glassmorphic tokens. |
| **Animations** | **Anime.js v4.5** | High-performance tweening, Ken Burns scale loops, and scoped cleanup (`astro:before-swap`). |
| **Routing** | **Astro ClientRouter** | Seamless SPA-like page transitions without browser reloads. |
| **Typography** | **Google Fonts** | Editorial pairing of *Playfair Display* (serif luxury headings) and *Inter* (high-legibility UI sans). |

---

## 🚀 Getting Started

### Prerequisites
* **Node.js:** `>= 20.0.0` (Recommended: Node 22+)
* **Package Manager:** `npm`, `pnpm`, or `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/taiwan-top-travel.git
   cd taiwan-top-travel
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:4321` in your browser.

4. **Production Build:**
   ```bash
   npm run build
   ```
   Static files are compiled directly into `./dist/` in under 1 second.

---

## 📁 Repository Structure

```text
taiwan-top-travel/
├── public/
│   ├── favicon.svg                # Favicon asset
│   └── images/                    # Localized luxury photography assets
├── src/
│   ├── components/
│   │   ├── ConciergeWizard.astro  # 4-step multi-step booking wizard with simulation notice
│   │   ├── FloatingHud.astro      # Back to top & circular SVG scroll progress ring
│   │   ├── Footer.astro           # Editorial footer with platform & legal disclaimers
│   │   ├── Hero.astro             # High-impact typography reveals & ambient visuals
│   │   ├── HorizontalRunway.astro # GPU-accelerated pinned scroll track + comparison drawer
│   │   ├── Navbar.astro           # Frosted header with full-screen mobile menu drawer
│   │   ├── SeasonalityMatrix.astro# 12-month climate & rhythm matrix
│   │   ├── TransitVisualizer.astro# High-Speed Rail 300km/h transit visualizer
│   │   └── TripEstimator.astro    # Real-time interactive pricing calculator
│   ├── data/
│   │   ├── itineraries.ts         # Top 10 circuits & 54 day-by-day narratives
│   │   ├── seasonality.ts         # 12-month climate profiles & regional spectacles
│   │   └── transit.ts             # High-speed rail corridor node coordinates
│   ├── pages/
│   │   ├── index.astro            # Flagship homepage
│   │   └── itineraries/[slug].astro # Dynamic SSG detail dossier routes
│   ├── scripts/
│   │   └── animations.ts          # Centralized Anime.js v4 timeline orchestrators
│   └── styles/
│       └── global.css             # Tailwind v4 theme & glassmorphic utility rules
├── plan.md                        # Commercial roadmap & compliance strategy plan
├── package.json
└── README.md
```

---

## ⚖️ Legal & Portfolio Notice

**Taiwan Top Travel** is an interactive design and technical engineering portfolio concept. All featured 2026 itineraries, accommodation partnerships, pricing tiers, and booking dossiers are illustrative representations created for showcase purposes and do not constitute commercially binding travel contracts or live financial transactions.

For commercial activation, licensing requirements, and CRM backend specifications, refer to [`plan.md`](./plan.md).

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
