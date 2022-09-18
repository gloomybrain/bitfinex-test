'use strict';

const Order = require("./order");

class Limit {
  /**
   * @param {number} price 
   */
  constructor(price) {
    this.price = price;

    /** @type {LimitOrder[]} */
    this.orders = [];
  }

  /**
   * @param {number} amount 
   * @param {string} issuer 
   */
  addOrder(amount, issuer) {
    const order = new Order(amount, issuer);

    this.orders.push(order);

    return order;
  }
}

module.exports = Limit;
