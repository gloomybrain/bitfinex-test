FROM node:18-alpine

EXPOSE 20000
EXPOSE 80

RUN ["npm", "i", "-g", "grenache-grape"]

# we need this in order to make grape print its events and status
ENV DEBUG="grenache:grape"

CMD ["grape", "--dht_port", "20000", "--api_port", "3000", "--bootstrap", "'${GRAPE_BOOTSTRAP}'"]
