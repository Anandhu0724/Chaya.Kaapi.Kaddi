# 🍽️ Chaya.Kaapi.Kaddi — Golden Bakery Web Application

[![Live Deployment](https://img.shields.io/badge/Production-Live_Site-emerald?style=for-the-badge&logo=vercel)](https://chaya-kaapi-kaddi.vercel.app/)
[![Environment](https://img.shields.io/badge/Build_Tool-Vite-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Styling](https://img.shields.io/badge/CSS-Tailwind_Glassmorphism-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)

A premium, cinematic single-page web experience proudly engineered for **Golden Bakery**—our family's local bakery and tea stall located in the beautiful high ranges of Mlamala, Idukki. Built with a mobile-first philosophy, this application serves as a digital storefront to bridge our traditional afternoon griddle treats with daily commuters, tea estate travelers, and local regulars.

---

## 👨‍🍳 Family Business & Operational Core

This platform is custom-built to digitize my father's business operations and streamline daily crowd management at the counter:
* **The Afternoon Rush:** Our kitchen griddle fires up fresh daily starting at **3:00 PM IST**, rolling out hot batches of authentic local treats right as the evening tea crowd hits.
* **Pre-Order Utility:** Regular local commuters and tea parties can use the interactive **Platter Builder** or the live communication tools to pre-order, reducing queues and wait times during peak afternoon hours.

---

## 📺 Project Walkthrough & UI Showcase

### 🎥 Live Demo Video
[![Watch the Demo Video](https://img.shields.io/badge/Google_Drive-Watch_Project_Walkthrough-orange?style=for-the-badge&logo=googledrive&logoColor=white)](https://drive.google.com/file/d/1ba1NS8gTqL0xNW3lFksu1swix_5sRUwi/view?usp=sharing)

> 💡 *Click the badge above to watch the full interactive walkthrough showcasing the glassmorphic card animations, floating menu triggers, and responsive layout scaling.*

### 📸 Responsive UI Screens

| 📱 Mobile View (Chai Station) | 💻 Desktop Full Experience |
| :---: | :---: |
| <img src="https://github.com/user-attachments/assets/f20ad7a6-3148-4e10-9309-2b05257d5dee" width="300" alt="Golden Bakery Mobile Responsive UI"/> | <img src="https://github.com/user-attachments/assets/682495fb-3fc0-4bd1-9cae-2d92b6ed85d8" width="570" alt="Golden Bakery Desktop Full Experience"/> |
| *Optimized for high-range commuters ordering on the go.* | *Full cinematic layout with interactive hover states.* |

---

## ✨ Features & Component Breakdown

### 🔮 Ultra-Modern Glassmorphism UI
* Every menu card is configured with deep, multi-layered frosted backdrops (`backdrop-blur-xl border-white/20`).
* High-performance 3D hover transitions handle fluid card physics (`hover:-translate-y-2 hover:scale-[1.02]`).

### 📱 Integrated Telephony & Instant Chat Triggers
* **One-Tap WhatsApp API Panel:** Automated customer routing configured to text **+91 6235160831** for instant pickup orders or catering coordination.
* **Fallback Cellular Call Protocol:** Mobile action links fall back cleanly into physical mobile dialer triggers (`tel:+916235160831`).

---

## 📋 The Full Culinary Config (JSON Dataset Structure)

The JavaScript rendering engine dynamically maps and displays our full daily menu across smooth category filters:

```json
{
  "drinks": [
    { "name": "Special Cardamom Tea", "price": "₹12", "tags": ["Fresh Ginger", "Cardamom Milk"] },
    { "name": "Strong Ginger Tea", "price": "₹12", "tags": ["Inji Chaya", "Fresh Brew"] },
    { "name": "Fresh Lemon Tea", "price": "₹12", "tags": ["Fresh Lime", "Black Decoction"] },
    { "name": "Sulaimani / Black Coffee", "price": "₹10", "tags": ["Traditional Kattan"] },
    { "name": "Masala Chai", "price": "₹15", "tags": ["Spiced Blend", "Aromatic"] },
    { "name": "Hot Boost / Horlicks Milk", "price": "₹20", "tags": ["Malted Nostalgia"] },
    { "name": "Filter Coffee", "price": "₹15", "tags": ["Chicory Blend", "Frothy Milk"] }
  ],
  "snacks_bakery": [
    { "name": "Uzhunnu Vada", "price": "₹15", "tags": ["Crispy", "Black Lentil"] },
    { "name": "Paruppu Vada", "price": "₹15", "tags": ["Chana Dal", "Curry Leaves"] },
    { "name": "Live Ulli Vada", "price": "₹15", "tags": ["Ribbon Fried", "Spicy Onion"] },
    { "name": "Nostalgic Bonda", "price": "₹15", "tags": ["Potato Mash", "Chickpea Batter"] },
    { "name": "Bakehouse Cutlet", "price": "₹15", "tags": ["Spiced Patties", "Crumbed Fried"] },
    { "name": "Yethaka Poli / Pazham Pori", "price": "₹15", "tags": ["Ripe Plantain", "Turmeric Batter"] },
    { "name": "Layered Egg & Veg Puffs", "price": "₹20", "tags": ["Flaky Puff", "Egg Masala Mix"] }
  ]
}
