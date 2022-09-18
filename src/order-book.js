'use strict';

const Limit = require('./limit');

class OrderBook {
  constructor() {
    this.limits = [];
    this.limitsByPrice = new Map();
  }

  submit(issuer, amount, price) {
    let limit = this.limitsByPrice.get(price);
    if (!limit) {
      limit = new Limit(price);

      this.limits.push(limit);
      this.limits.sort((a, b) => a.price - b.price);
    }

    return limit.addOrder(amount, issuer);
  }
}

module.exports = OrderBook;
