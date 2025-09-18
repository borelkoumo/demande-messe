FROM node:24.8.0-alpine3.21

RUN npm install --global corepack@latest && corepack enable pnpm
USER node
WORKDIR /app
COPY --chown=node:node ./package.json ./
RUN pnpm install
COPY --chown=node:node . .
EXPOSE 8085
CMD ["pnpm", "start"]
