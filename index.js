'use strict';

const debug = require('debug');
const { PeerRPCClient }  = require('grenache-nodejs-http');
const Link = require('grenache-nodejs-link');

const GRAPE_LINK_ADDRESS = process.env.GRAPE_LINK_ADDRESS;

const link = new Link({
  grape: GRAPE_LINK_ADDRESS
});
link.start();

debug('client')(`link started with ${GRAPE_LINK_ADDRESS}`);

const peer = new PeerRPCClient(link, {})
peer.init()

setInterval(() => {
  debug('client')('attempt to register a limit');

  peer.request('register-limit', { msg: 'hello' }, { timeout: 10000 }, (err, data) => {
    if (err) {
      console.error(err);
      // process.exit(-1);
    }
    else {
      debug('client')(data);
    }
  });
}, 5000);
