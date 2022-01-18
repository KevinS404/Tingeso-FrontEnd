FROM node:lts-alpine

COPY . .

# install simple http server for serving static content
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
#CMD ["http-server", "dist" ]