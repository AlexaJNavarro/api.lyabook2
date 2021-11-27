FROM node:14.17.3-stretch-slim
RUN mkdir api.lyabook2
WORKDIR api.lyabook2 
COPY . .
ENV PORT=${PORT}
ENV MONGO_URI=${MONGO_URI}
EXPOSE 8082
RUN npm i
CMD ["npm","run","start"]