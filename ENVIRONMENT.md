# Environment Configuration

## Variables

| Variable | Required | Default | Description |
|---|---|---|---|
| `GEMINI_API_KEY` | Yes | — | Gemini AI API key for AI features |
| `APP_URL` | No | `http://localhost:3000` | App URL for self-referential links |
| `DISABLE_HMR` | No | `false` | Disable HMR (set to `true` in AI Studio) |

## Setup

```bash
cp .env.example .env.local
```

Edit `.env.local` with your values.

## Files

| File | Purpose | Gitignored |
|---|---|---|
| `.env.example` | Template with placeholder values | No |
| `.env.local` | Local secrets and config | Yes |
