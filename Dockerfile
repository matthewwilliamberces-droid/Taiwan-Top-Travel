# Build Stage
FROM node:22-alpine AS builder

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies cleanly
RUN npm ci

# Copy source files
COPY . .

# Build production static bundle
RUN npm run build

# Production Stage: High-Performance Nginx
FROM nginx:alpine

# Remove default nginx configs
RUN rm -rf /etc/nginx/conf.d/*

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled static assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
