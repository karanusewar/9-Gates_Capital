FROM node:22-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --only=production
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.27-alpine
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN chown -R appuser:appgroup /usr/share/nginx/html /var/cache/nginx /var/run
USER appuser
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:8080/api/health || exit 1
CMD ["nginx", "-g", "daemon off;"]
