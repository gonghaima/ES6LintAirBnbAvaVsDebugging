export default class Checkout {
  constructor(priceRule){
    this.priceRule = priceRule;
    console.log('price rule: ', this.priceRule);
    this.items=[];
  }

  // Getter
  get checkoutName(){
    const rl = this.priceRule;
    return 'myCheckout Name';
  }

  get cPriceRule(){
    return this.priceRule;
  }

  scan(item){
    const result = this.items.push(item);
    return result;
  }
  total(){
    return this.priceRule.total(this.items);
  }
  showItems(){
    return this.items;
  }
};
