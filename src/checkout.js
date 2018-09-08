import productData from '../config/product.json';
import discountData from '../config/discount.json';
export default class Checkout {
  constructor(priceRules) {
    this.priceRules = priceRules;
    this.productList = JSON.parse(JSON.stringify(productData));
    this.discountData = JSON.parse(JSON.stringify(discountData));
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
      return applyRule(that.items, that.productList, that.discountData);
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
