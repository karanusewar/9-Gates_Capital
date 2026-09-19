# Deployment Guide

## Docker Deployment (Recommended)

```bash
docker compose up --build -d
```

Verify:

```bash
curl http://localhost:8080/api/health
# {"status":"healthy","service":"9gates-capital",...}
```

## Native Deployment

```bash
npm run build
npm run preview
```

The production build is in the `dist/` directory. Serve with any static file server (nginx, Caddy, etc.).

## CI/CD

The GitHub Actions workflow in `.github/workflows/ci.yml` runs:
1. Lint & TypeScript check
2. Unit tests
3. Production build
4. Docker image build

## Environment Variables

| Variable | Description |
|---|---|
| `GEMINI_API_KEY` | Gemini AI API key |
| `APP_URL` | Application URL for self-referential links |
