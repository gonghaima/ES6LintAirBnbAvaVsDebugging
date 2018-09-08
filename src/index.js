import Checkout from './checkout';

const requireDir = require('require-dir');

const PricingRules = requireDir('./pricingRules');

const co = new Checkout(PricingRules);
co.scan('cari');
co.scan('cari');
co.scan('cari');
co.scan('peti');
const total1 = co.total();

const co1 = new Checkout(PricingRules);
co1.scan('cari');
co1.scan('homi');
co1.scan('homi');
co1.scan('cari');
co1.scan('homi');
co1.scan('homi');
co1.scan('homi');
const total2 = co1.total();

const co2 = new Checkout(PricingRules);
co2.scan('heai');
co2.scan('peti');
co2.scan('homi');
const total3 = co2.total();

console.log(total1);
console.log(total2);
console.log(total3);
