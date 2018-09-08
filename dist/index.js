'use strict';


var _checkout = require('./checkout');var _checkout2 = _interopRequireDefault(_checkout);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var CheckOut = require('./checkout'); // import PricingRules from './pricingRules';
// import PricingRules from './pricingRules';
var requireDir = require('require-dir');
var PricingRules = requireDir('./pricingRules');

var co = new _checkout2.default(PricingRules);
co.scan('cari');
co.scan('cari');
co.scan('cari');
co.scan('peti');
var total1 = co.total();

var co1 = new _checkout2.default(PricingRules);
co1.scan('cari');
co1.scan('homi');
co1.scan('homi');
co1.scan('cari');
co1.scan('homi');
co1.scan('homi');
co1.scan('homi');
var total2 = co1.total();

var co2 = new _checkout2.default(PricingRules);
co2.scan('heai');
co2.scan('peti');
co2.scan('homi');
var total3 = co2.total();

console.log(total1);
console.log(total2);
console.log(total3);
//# sourceMappingURL=index.js.map