'use strict'

const { PeerRPCServer }  = require('grenache-nodejs-http');
const Link = require('grenache-nodejs-link');
const debug = require('debug');

const GRAPE_LINK_ADDRESS = process.env.GRAPE_LINK_ADDRESS;
const SERVICE_LISTEN_PORT = process.env.SERVICE_LISTEN_PORT;

const link = new Link({
  grape: GRAPE_LINK_ADDRESS
});
link.start();

const peer = new PeerRPCServer(link, {
  timeout: 300000
});
peer.init();


const service = peer.transport('server');
service.listen(SERVICE_LISTEN_PORT);

setInterval(() => {
  debug('register-limit')(`announcing register-limit on ${SERVICE_LISTEN_PORT}`);

  link.announce('register-limit', SERVICE_LISTEN_PORT, {});
}, 1000);

service.on('request', (rid, key, payload, handler) => {
  debug('register-limit')(rid, key, payload);

  handler.reply(null, { msg: 'world' });
});
