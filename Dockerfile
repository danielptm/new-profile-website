# -------- Stage 1: Build the application --------
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /

# Copy rest of the application
COPY package.json package.json
COPY src src
COPY postcss.config.mjs postcss.config.mjs
COPY tsconfig.json tsconfig.json
COPY eslint.config.mjs eslint.config.mjs
COPY next.config.ts next.config.ts


# Build the Next.js app
RUN npm run build

## -------- Stage 2: Production image --------
#FROM node:18-alpine AS runner
#
## Set environment variables
#ENV NODE_ENV=production
#ENV PORT=3000
#
## Set working directory
#WORKDIR /app
#
## Only copy necessary files from the build stage
#COPY --from=builder /app/public ./public
#COPY --from=builder /app/.next ./.next
#
## Expose the port the app runs on
#EXPOSE 3000
#
## Start the Next.js server
#CMD ["npm", "start"]
