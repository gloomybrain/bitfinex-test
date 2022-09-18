'use strict';

const debug = require('debug');
const Link = require('grenache-nodejs-link');

const GRAPE_LINK_ADDRESS = process.env.GRAPE_LINK_ADDRESS;

const link = new Link({
  grape: GRAPE_LINK_ADDRESS
});
link.start();

debug('client')(`link started with ${GRAPE_LINK_ADDRESS}`);



