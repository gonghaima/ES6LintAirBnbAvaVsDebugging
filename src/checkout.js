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
    return this.format(this.priceRule.total(this.items));
  }
  format(data){
    if(Math.floor(data)===data){
      return `\$ ${data}.00`;
    }
    return `\$ ${data}`
  }
  showItems(){
    return this.items;
  }
};
