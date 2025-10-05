FROM node:lts-alpine AS builder

WORKDIR /app

# Copy dependencies first (for better caching)
COPY package*.json ./

RUN npm ci

# Copy source and build
COPY . .

RUN npm run build

# Stage 2 — production image
FROM node:lts-alpine AS runner

WORKDIR /app

# Copy only the stuff we need to run
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/migrations ./migrations
COPY --from=builder /app/scripts ./scripts

RUN npm ci --omit=dev

# Run migrations, then start
CMD npm run migrate && npm start
