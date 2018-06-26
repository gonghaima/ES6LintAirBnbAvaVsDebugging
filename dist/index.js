'use strict';

var _pricingRules = require('./pricingRules');var _pricingRules2 = _interopRequireDefault(_pricingRules);

var _checkout = require('./checkout');var _checkout2 = _interopRequireDefault(_checkout);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var CheckOut = require('./checkout'); // const PricingRules = require('./pricingRules');
// const Checkout = require('./checkout');
// CheckOut co = new Checkout(new PricingRules());


// co.Checkout();
// var co = new Checkout({myRule:"my say"});
var co = new _checkout2.default(new _pricingRules2.default());
console.log(co.checkoutName);
console.log(co.findOutToday());
console.log(co.scan({ key: "sdfe233254ds" }));
console.log(co.showItems());
// console.log(co.cPriceRule);


// Checkout co = new Checkout(pricingRules);
//   co.scan(item1);
//   co.scan(item2);
//   co.total();
//# sourceMappingURL=index.js.map