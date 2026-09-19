# Architecture

## Overview

Single-page React application with component-based architecture. No backend — the app is a static frontend that can optionally connect to the Gemini AI API.

## Directory Structure

```
├── src/
│   ├── components/     # React components (15)
│   ├── lib/            # Data layer
│   ├── assets/images/  # Static images
│   ├── App.tsx         # Root component
│   ├── main.tsx        # Entry point
│   ├── index.css       # Global styles + Tailwind
│   └── setupTests.ts   # Test setup
├── .github/workflows/  # CI/CD pipeline
├── Dockerfile          # Multi-stage Docker build
├── docker-compose.yml  # Docker orchestration
└── nginx.conf          # Nginx config with health endpoint
```

## Component Tree

```
App
├── Background (animated SVG + grid)
├── CustomCursor
├── Navigation
├── Hero
├── About
├── Services
├── Advantages
├── Sectors
├── Testimonial
├── CaseStudies
├── Team
├── Guarantee
├── Contact
└── Footer
```
