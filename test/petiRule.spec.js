import test from 'ava';
import productData from '../config/product.json';
import discountData from '../config/discount.json';

const petiRule = require('../src/pricingRules/petiRule');

const items = ['heai'];
const itemsDiscountPeti = ['heai', 'peti'];
const itemsDiscountTwoPeti = ['heai', 'peti', 'peti'];

test('petiRule should only look for peti item', t => {
  const result = petiRule(items, productData, discountData);
  t.is(result, 0);
});

test('petiRule should be free per health item', t => {
  const result = petiRule(itemsDiscountPeti, productData, discountData);
  t.is(result, 0);
});

test('only one petiRule should be free per health item', t => {
  const result = petiRule(itemsDiscountTwoPeti, productData, discountData);
  t.is(result, 30);
});
