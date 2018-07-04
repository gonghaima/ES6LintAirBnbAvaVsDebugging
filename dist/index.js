'use strict';

var _pricingRules = require('./pricingRules');var _pricingRules2 = _interopRequireDefault(_pricingRules);
var _checkout = require('./checkout');var _checkout2 = _interopRequireDefault(_checkout);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var CheckOut = require('./checkout'); // import PricingRules from './pricingRules';

var co = new _checkout2.default(new _pricingRules2.default());
co.scan('cari');
co.scan('cari');
co.scan('cari');
co.scan('peti');
var total1 = co.total();

var co1 = new _checkout2.default(new _pricingRules2.default());
co1.scan('cari');
co1.scan('homi');
co1.scan('homi');
co1.scan('cari');
co1.scan('homi');
co1.scan('homi');
co1.scan('homi');
var total2 = co1.total();

var co2 = new _checkout2.default(new _pricingRules2.default());
co2.scan('heai');
co2.scan('peti');
co2.scan('homi');
var total3 = co2.total();

console.log(total1);
console.log(total2);
console.log(total3);
//# sourceMappingURL=index.js.map