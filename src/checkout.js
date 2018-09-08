import productData from '../config/product.json';
export default class Checkout {
  constructor(priceRules) {
    this.priceRules = priceRules;
    this.productList = JSON.parse(JSON.stringify(productData));
    this.items = [];
  }

  // Getter
  get checkoutName() {
    const rl = this.priceRule;
    return 'myCheckout Name';
  }

  scan(item) {
    const result = this.items.push(item);
    return result;
  }
  total() {
    const that = this;
    let summaryList = Object.entries(this.priceRules).map(([key, applyRule]) =>{
      return applyRule(that.items, that.productList);
      });
    

    let total = summaryList.reduce((a, b) =>  a + b , 0);
 
    return this.format(total);
  }
  format(data) {
    if (Math.floor(data) === data) {
      return `\$ ${data}.00`;
    }
    return `\$ ${data}`
  }
};
