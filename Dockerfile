FROM node:16


WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json .
RUN npm install 
RUN npm install react-scripts@5.0.1

EXPOSE 3000
COPY . ./

CMD ["npm", "start"]
