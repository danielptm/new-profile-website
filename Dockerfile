# -------- Stage 1: Build the application --------
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy rest of the application
COPY . .
RUN npm install
# Build the Next.js app
RUN npm run build

## -------- Stage 2: Production image --------
FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV production
# Next.js standalone output copies necessary files to .next/standalone
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public

# Expose the port your Next.js app listens on
EXPOSE 3000

# Start the Next.js server
CMD ["node", "server.js"]