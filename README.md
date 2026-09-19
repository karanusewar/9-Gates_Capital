# 9 Gates Capital

A modern, high-performance, and responsive landing page for **9 Gates Capital** — a premier global private investment firm specializing in growth capital, real estate, energy transition, private equity, and structured finance.

🌐 **Live Website:** [https://www.capnexgen.com/](https://www.capnexgen.com/)  
🚀 **Deployment Platform:** Deployed via [Vercel](https://vercel.com/)

---

## 📌 Project Overview

**9 Gates Capital** is designed to provide institutional investors, partners, and high-net-worth clients with an interactive, visually stunning, and transparent view into the firm's investment sectors, strategic advantages, portfolio case studies, and corporate governance.

The interface emphasizes ultra-clean aesthetics, dark-mode elegance, fluid motion micro-interactions, custom cursor tracking, dynamic background canvas animations, and seamless user experiences across mobile, tablet, and desktop devices.

---

## 🛠️ Tech Stack & Technical Architecture

### Core Technologies
- **React 19:** Building block for reactive, declarative component UI architecture.
- **TypeScript (~5.8):** Type-safe application development ensuring runtime stability and strict interface structures.
- **Vite 6:** Ultra-fast Next-Gen frontend build tool and hot module replacement (HMR) environment.
- **Tailwind CSS v4:** Utility-first styling framework with CSS custom variables for dark/light themes and modern dynamic design system layout.

### UI & Animations
- **Motion (Framer Motion v12):** Physics-based animation library enabling smooth scroll transitions, stagger effects, hover states, and modal interactions.
- **Lucide React:** Lightweight, vector-crisp icons for financial metrics, navigation, and sector highlights.
- **Canvas / WebGL Background:** Dynamic procedural particle/grid backdrop rendering for immersive depth.
- **Custom Mouse Cursor:** Interactive cursor framework attached to hoverable DOM triggers (`<a>`, `<button>`).

### AI & API Integration
- **@google/genai:** Integrates Google Gemini AI capabilities for intelligent content generation, natural language processing, or smart advisory features.

---

## 💡 Comprehensive Terminology & Domain Concepts

To provide a deeper understanding of the website's context, the table below breaks down key financial, architectural, and engineering terms used throughout the platform:

### 💼 Financial & Investment Terminology

| Term | Definition |
| :--- | :--- |
| **Private Equity (PE)** | Capital invested directly into private companies or used to buy out public companies to restructure and scale operations. |
| **Growth Capital** | Equity investment in relatively mature companies that are looking for capital to expand or restructure operations without relinquishing control. |
| **Structured Finance** | Specialized financial instruments created for large, complex financing needs beyond conventional loans or equity instruments. |
| **Real Estate & Infrastructure** | Direct asset acquisition and management across commercial, industrial, residential development, and logistics networks. |
| **Energy Transition** | Strategic capital allocation towards renewable energy assets, clean technology, decarbonization projects, and sustainable utilities. |
| **ESG (Environmental, Social, Governance)** | Framework used to evaluate a firm's sustainability and ethical impact in investment portfolios. |
| **Co-Investment** | Direct investment made by institutional investors alongside a primary private equity fund manager. |

### 💻 Software & Engineering Terminology

| Term | Definition |
| :--- | :--- |
| **HMR (Hot Module Replacement)** | Development feature that exchanges, adds, or removes modules while an application is running without a full reload. |
| **Single Page Application (SPA)** | Web application model where content updates dynamically without full server page refreshes. |
| **Type-Safety** | Compile-time check mechanism in TypeScript that prevents type mismatches and runtime `null`/`undefined` errors. |
| **Utility-First CSS** | Design paradigm (Tailwind) where low-level utility classes are composed directly in HTML/JSX markup. |
| **Production Bundle Optimization** | Process where Vite & esbuild minify CSS/JS assets, eliminate dead code (tree-shaking), and split chunks for instant page loads. |

---

## 🚀 Getting Started Locally

### Prerequisites
- **Node.js**: `v20.0.0` or higher
- **npm**: `v10.0.0` or higher

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/karanusewar/9-Gates_Capital.git
   cd 9-Gates_Capital
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory (refer to `.env.example`):
   ```env
   GEMINI_API_KEY="your_gemini_api_key_here"
   APP_URL="http://localhost:3000"
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for Production**
   ```bash
   npm run build
   ```

---

## ⚡ Deployment

This website is hosted on **Vercel** with continuous deployment linked to the production branch.

### Manual Vercel CLI Deployment
```bash
# Preview Deployment
vercel deploy

# Production Deployment
vercel deploy --prod
```

---

## ✨ Credits & Ownership

- **Project Lead & Developer:** [Karan Usewar](https://www.linkedin.com/in/karanusewar/)
- **Live Domain:** [https://www.capnexgen.com/](https://www.capnexgen.com/)
- **Deployment Platform:** [Vercel](https://vercel.com/)
