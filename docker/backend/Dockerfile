FROM node:22-alpine

WORKDIR /app

RUN apk add --no-cache \
    openssl \
    openssl-dev \
    libc6-compat

RUN corepack enable
RUN corepack prepare pnpm@9.15.0 --activate

COPY . .

RUN pnpm install --no-frozen-lockfile
RUN pnpm --filter goopsy-backend exec prisma generate --schema=prisma/schema.prisma

RUN pnpm --filter goopsy-backend build

EXPOSE 3000

CMD ["pnpm", "--filter", "goopsy-backend", "start"]