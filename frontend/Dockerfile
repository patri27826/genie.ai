FROM node:18-alpine
WORKDIR /frontend
COPY . .
RUN yarn install
RUN yarn build
CMD [ "yarn", "start" ]
