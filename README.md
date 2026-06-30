# 🍽️ Golden Bakery — High-Range Premium Food UI

[![Live Demo](https://img.shields.io/badge/Demo-Live_Site-amber?style=for-the-badge&logo=netlify)](https://your-netlify-link.netlify.app)
[![GitHub](https://img.shields.io/badge/Repository-Open_Source-2C2C2C?style=for-the-badge&logo=github)](https://github.com/your-username/golden-bakery)

An ultra-modern, cinematic single-page web application designed for **Golden Bakery**, located in the scenic Mlamala high ranges of Idukki. Built with a mobile-first philosophy, this site features glassmorphic UI elements, dynamic motion video integration, and an interactive local snack filtering system.

---

## ✨ Features & UI Architecture

### 🎬 Cinematic Motion & Video Integration
* **Ambient Hero Container:** Replaced boring static imagery with a looping, high-definition HTML5 ambient media frame showcasing hot poured chai and flaky pastries.
* **Micro-Animations:** Real-time CSS-rendered gentle steam rising from drink components to make the interface feel alive.

### ⚡ Interactive "Food Buttons" & Micro-Interactions
* **Dynamic Menu Filtering:** A custom, ultra-fast JavaScript filtering engine that seamlessly toggles snack categories without page reloads.
* **Animated Hover States:** Advanced transitions on all primary CTAs, including physical scaling, inner golden glow borders (`#D4AF37`), and smooth color drops.
* **Live Batch Status:** An active, pulsing emerald beacon indicating the arrival of fresh, hot evening snacks.

### 📍 Localized Precision
* Built-in dark-mode geolocation container displaying precise landmark data for commuters and locals alike.
* Expandable floating quick-action communication panel for pre-orders and bulk inquiries.

---

## 🛠️ Tech Stack & Dependencies

* **Frontend Engine:** HTML5 (Semantic Structure) & Vanilla JavaScript (ES6+ DOM Manipulation)
* **Styling Framework:** Tailwind CSS (Utility-first configuration with custom arbitrary values)
* **Iconography:** Lucide Icons (Sleek, lightweight vector SVGs)
* **Hosting Platform:** Netlify / Vercel with automated GitHub continuous deployment pipelines

---

## 📋 The Authentic Menu Config (JSON Structure)

The website dynamically parses and maps local, high-demand Kerala treats into a modern grid:

```json
[
  {
    "name": "Special Cardamom Tea",
    "category": "drinks",
    "price": "₹12",
    "description": "Steaming, frothy single chai brewed with local high-range cardamom."
  },
  {
    "name": "Uzhunnu Vada",
    "category": "snacks",
    "price": "₹15",
    "description": "Fluffy, savory black lentil donuts featuring deep golden, ultra-crispy ridges."
  },
  {
    "name": "Yethaka Poli (Pazham Pori)",
    "category": "snacks",
    "price": "₹15",
    "description": "Sweet, perfectly ripe local plantain fritters fried to a rich crisp perfection."
  },
  {
    "name": "Layered Egg & Veg Puffs",
    "category": "bakery",
    "price": "₹20",
    "description": "Ultra-flaky multi-layered golden pastry stuffed with a rich, caramelized masala blend."
  }
]
