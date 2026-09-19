# API Reference

## Health Check

```
GET /api/health
```

**Response:**

```json
{
  "status": "healthy",
  "service": "9gates-capital",
  "timestamp": "2026-07-01T12:00:00+00:00"
}
```

## Frontend Routes

| Route | Component | Description |
|---|---|---|
| `/` | `App` | Landing page with all sections |
| `/#about` | `About` | About section |
| `/#services` | `Services` | Services listing |
| `/#sectors` | `Sectors` | Industry sectors |
| `/#work` | `CaseStudies` | Portfolio |
| `/#team` | `Team` | Team section |
| `/#contact` | `Contact` | Contact form |
