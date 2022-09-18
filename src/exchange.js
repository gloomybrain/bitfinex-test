'use strict';

const OrderBook = require('./order-book');

class Exchange {
  constructor() {
    this.buy = new OrderBook();
    this.sell = new OrderBook();
  }

  ask(issuer, amount, limit) {
    const order = this.sell.submit(issuer, amount, limit);

    // then run through the buy book
    // find matching orders
    // if there are enough to fulfill this order
    // then execute this order and mark matching orders as done
    // place any leftover as a new bid
  }

  bid(issuer, amount, limit) {
    const order = this.buy.submit(issuer, amount, limit);

    // then run through the sell book
    // find matching orders
    // if there are enough to fulfill this order
    // then execute this order and mark matching orders as done
    // place any leftover as a new ask
  }
}

module.exports = Exchange;
