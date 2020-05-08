FROM strapi/base
WORKDIR "/app"
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn install
COPY . .
ENV NODE_ENV production
RUN yarn build
RUN yarn strapi install graphql
EXPOSE 1337
CMD ["yarn", "start"]