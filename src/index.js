const CheckOut = require('./checkout');
// const PricingRules = require('./pricingRules');
import PricingRules from './pricingRules';
// const Checkout = require('./checkout');
import Checkout from './checkout';

// CheckOut co = new Checkout(new PricingRules());


// co.Checkout();
// var co = new Checkout({myRule:"my say"});
var co = new Checkout(new PricingRules());
console.log(co.checkoutName);
console.log(co.findOutToday());
console.log(co.scan({key:"sdfe233254ds"}));
console.log(co.showItems());
// console.log(co.cPriceRule);


// Checkout co = new Checkout(pricingRules);
//   co.scan(item1);
//   co.scan(item2);
//   co.total();