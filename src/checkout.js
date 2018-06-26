export default class Checkout {
  constructor(priceRule){
    this.priceRule = priceRule;
    console.log('price rule: ', this.priceRule);
    this.items=[];
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

  scan(item){
    this.items.push(item);
  }
  showItems(){
    return this.items;
  }
};
