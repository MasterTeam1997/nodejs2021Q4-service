const { v4: uuid } = require('uuid');

class Column {
  constructor(title) {
    this.id = uuid();
    this.title = title;
    this.orders = new Set()
  }

  addOrder(orderId) {
    if(this.orders.has(orderId)){
      return "Order was already existed"
    } 
      this.orders.add(orderId)
      return this.orders
    
  }

  deleteOrder(orderId) {
    if(this.orders.has(orderId)){
      this.orders.delete(orderId)
      return this.orders
    } 
      return "Order doesn't exist"
    
  }

  isExistOrder(orderId) {
      return this.orders.has(orderId)
  }
}

module.exports = Column;
