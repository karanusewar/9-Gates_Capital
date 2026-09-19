# Installation Guide

## Prerequisites

- Node.js >= 18 (recommended: 22.x)
- npm >= 9
- Docker (optional, for containerized deployment)

## Steps

1. Clone the repository:

   ```bash
   git clone <repo-url>
   cd 9-gates-main
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set environment variables:

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and add your `GEMINI_API_KEY`.

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000).
