FROM node:lts
WORKDIR /tmp/project
COPY . .
RUN npm install
ENTRYPOINT ["npm","run","dev"]