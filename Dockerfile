# Используем официальный образ Node.js (версия зависит от твоего проекта)
FROM node:22-alpine AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json (или yarn.lock)
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm install --frozen-lockfile

# Копируем весь код проекта
COPY . .

# Собираем Next.js-приложение
RUN npm run build

# --- Продакшен-контейнер ---
FROM node:22-alpine AS runner

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем только необходимые файлы из builder
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next/ .next/
COPY --from=builder /app/public/ public/

# Устанавливаем только production-зависимости
RUN npm install --only=production

# Устанавливаем переменную окружения (опционально)
ENV NODE_ENV=production

EXPOSE 3000

# Запускаем Next.js в продакшене
CMD ["npm", "run", "start"]
