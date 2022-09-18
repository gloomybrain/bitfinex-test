'use strict';

class Order {
  /**
   * @param {number} amount
   * @param {string} issuer
   */
  constructor(amount, issuer) {
    this.amount = amount;
    this.issuer = issuer;
  }
}

module.exports = Order;
