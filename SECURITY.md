# Security

## Secrets Management

- All secrets are stored in `.env.local` (gitignored)
- `.env.example` contains only placeholder values
- No API keys, passwords, or tokens are hardcoded in source code
- The `.gitignore` explicitly excludes all `.env*` files except `.env.example`

## Best Practices

- Non-root user in Docker containers
- Pinned dependency versions in Dockerfile
- Read-only filesystem for production containers
- Health endpoint requires no authentication (read-only status)
- HTTPS recommended for production deployments

## Dependency Security

- Regular `npm audit` scans
- CI pipeline includes dependency scanning
- All dependencies pinned to patch versions in Docker builds
