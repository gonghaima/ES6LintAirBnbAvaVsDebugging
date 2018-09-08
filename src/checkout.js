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
    return JSON.stringify(this.items);
  }

  scan(item) {
    const result = this.items.push(item);
    return result;
  }

  total() {
    const that = this;
    /* eslint-disable */
    const summaryList = Object.entries(this.priceRules).map(
      ([key, applyRule]) =>
        applyRule(that.items, that.productList, that.discountData)
    );
    /* eslint-enable */

    const total = summaryList.reduce((a, b) => a + b, 0);

    return this.format(total);
  }
  /* eslint-disable */
  format(data) {
    if (Math.floor(data) === data) {
      return `$ ${data}.00`;
    }
    return `$ ${data}`;
  }
  /* eslint-enable */
}
