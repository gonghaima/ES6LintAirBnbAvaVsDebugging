const CheckOut = require('./checkout');
import PricingRules from './pricingRules';
import Checkout from './checkout';

var co = new Checkout(new PricingRules());

co.scan('cari');
co.scan('cari');
co.scan('cari');
co.scan('peti');
var total1= co.total();

var co1 = new Checkout(new PricingRules());
co1.scan('cari');
co1.scan('homi');
co1.scan('homi');
co1.scan('cari');
co1.scan('homi');
co1.scan('homi');
co1.scan('homi');
var total2= co1.total();

var co2 = new Checkout(new PricingRules());
co2.scan('heai');
co2.scan('peti');
co2.scan('homi');
var total3= co2.total();

console.log(total1);
