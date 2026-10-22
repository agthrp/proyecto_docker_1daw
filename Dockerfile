# 1. Imagen de Desarrollo
FROM node:22-alpine AS development
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]

# 2. Imagen de Dependencias de Producción
FROM node:22-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# 3. Imagen Final de Producción (Distroless - Ultra segura)
FROM gcr.io/distroless/nodejs22-debian12 AS production
WORKDIR /app
COPY --from=deps /app/node_modules node_modules
COPY src src
CMD ["src/server.js"]