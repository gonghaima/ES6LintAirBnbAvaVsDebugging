export default class Checkout {
  constructor(priceRule){
    this.priceRule = priceRule;
    console.log('price rule: ', this.priceRule);
  }

  // Getter
  get checkoutName(){
    return 'myCheckout Name';
  }

  get cPriceRule(){
    return this.priceRule;
  }

  findOutToday(){
    return new Date().getDate();
  }
};
